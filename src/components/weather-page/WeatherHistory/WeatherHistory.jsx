import moment from "moment";
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

export default function WeatherHistory() {
  // access history from local storage
  // should also update search history everytime user searches something

  const historyArr = [
    {
      city: "Johor",
      country: "MY",
      timeStamp: "2023-07-01T12:13:01+08:00",
    },
    {
      city: "Kuala Lumpur",
      country: "MY",
      timeStamp: "2013-01-01T16:13:01+08:00",
    },
  ];

  return (
    <OuterGrid>
      <TitleTypography variant="h4">Search History</TitleTypography>
      <DividerStyled />
      {Array.isArray(historyArr) && historyArr.length > 0 ? (
        historyArr.map((history, index) => (
          <SearchHistoryRecord recordIndex={index} record={history} />
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

  async function handleSearch() {
    // trigger redux change
  }

  async function handleDeleteRecord() {
    // trigger redux change
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
