import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LOCAL_STORAGE_SEARCH_HISTORY,
  Severity,
} from "../../../helpers/constants";
import { toggleShowSnackbar } from "../../../redux/snackbarSlice";
import { FETCH_WEATHER_FAILED } from "../../../redux/types";
import {
  deleteSearchHistory,
  fetchWeather,
  hydateSearchHistory,
  updateSearchKeyword,
} from "../../../redux/weatherSlice";
import {
  DividerStyled,
  EmptyStateTypography,
  GridStyled,
  IconButtonStyled,
  OuterGrid,
  RecordTygraphy,
  SearchIcon,
  TitleTypography,
  TrashIcon,
} from "./styles";

// does not need to change because of state
const recordKeyName = "search-history-record";

export default function WeatherHistory() {
  const [localHistory, setLocalHistory] = useState([]);

  const historyArr = useSelector((state) => state.weather?.searchHistory);

  const dispatch = useDispatch();

  // retrieve local storage history, and hydrate redux once it is ready
  // This will allow every refresh to persist search history until local storage is cleared
  useEffect(() => {
    const localStrData = localStorage.getItem(LOCAL_STORAGE_SEARCH_HISTORY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEARCH_HISTORY))
      : [];
    dispatch(hydateSearchHistory(localStrData));
  }, [dispatch]);

  useEffect(() => {
    setLocalHistory(historyArr);
  }, [historyArr]);

  return (
    <OuterGrid>
      <TitleTypography variant="h4">Search History</TitleTypography>
      <DividerStyled />
      {Array.isArray(localHistory) && localHistory.length > 0 ? (
        localHistory.map((history, index) => (
          <SearchHistoryRecord
            key={`${recordKeyName}-${index + 1}`}
            recordIndex={index}
            record={history}
          />
        ))
      ) : (
        <GridStyled container padding={"40px"} justifyContent={"center"}>
          <EmptyStateTypography variant="h6">No record</EmptyStateTypography>
        </GridStyled>
      )}
    </OuterGrid>
  );
}

// Reusable component for displaying each record of search history
function SearchHistoryRecord(props) {
  const { recordIndex, record } = props || {};

  const formatRecordTime = moment(record?.timeStamp).format("LTS");

  const dispatch = useDispatch();

  async function handleSearch() {
    // trigger redux change
    dispatch(
      updateSearchKeyword({
        city: record?.city ?? "",
        country: record?.country ?? "",
      })
    );

    try {
      const weatherRes = await dispatch(
        fetchWeather({
          city: record?.city ?? "",
          country: record?.country ?? "",
          apiKey: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
        })
      );

      // set show error if no api call returns error / no data
      if (weatherRes.type === FETCH_WEATHER_FAILED) {
        dispatch(
          toggleShowSnackbar({
            open: true,
            message: weatherRes.error?.message ?? "Weather forecast not found",
            severity: Severity.ERROR,
          })
        );
      }
    } catch (error) {
      dispatch(
        toggleShowSnackbar({
          open: true,
          message: "Error fetching weather data!",
          severity: Severity.ERROR,
        })
      );
    }
  }

  async function handleDeleteRecord() {
    dispatch(
      deleteSearchHistory({
        city: record?.city,
        timeStamp: record?.timeStamp,
      })
    );
  }

  return (
    <GridStyled marginX={"5px"}>
      <GridStyled
        container
        columns={12}
        paddingY={"13px"}
        alignItems={"center"}
        flexWrap={"nowrap"}
        gap={"10px"}
      >
        <GridStyled item xs={1}>
          <RecordTygraphy variant="body1">{recordIndex + 1}</RecordTygraphy>
        </GridStyled>
        <GridStyled item flex={1}>
          <RecordTygraphy variant="body1">
            {record.city}, {record.country}
          </RecordTygraphy>
        </GridStyled>
        <GridStyled
          item
          xs={3}
          container
          alignItems={"center"}
          justifyContent={"flex-end"}
          maxWidth={"200px"}
          gap={"7px"}
        >
          <RecordTygraphy variant="body1">{formatRecordTime}</RecordTygraphy>
          <IconButtonStyled onClick={handleSearch}>
            <SearchIcon />
          </IconButtonStyled>
          <IconButtonStyled onClick={handleDeleteRecord}>
            <TrashIcon />
          </IconButtonStyled>
        </GridStyled>
      </GridStyled>
      <DividerStyled />
    </GridStyled>
  );
}
