import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Severity } from "../../../helpers/constants";
import { toggleShowSnackbar } from "../../../redux/snackbarSlice";
import { FETCH_WEATHER_FAILED } from "../../../redux/types";
import { addSearchHistory, fetchWeather } from "../../../redux/weatherSlice";
import {
  ButtonStyled,
  DividerStyled,
  GridStyled,
  OuterGridStyled,
  TextFieldStyled,
  TypographyStyled,
} from "./styles";

export default function WeatherSearchBar() {
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [cityErr, setCityErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);

  const dispatch = useDispatch();
  const reduxCity = useSelector((state) => state.weather.targetCity);
  const reduxCountry = useSelector((state) => state.weather.targetCountry);

  async function handleSearch() {
    if (!inputCity) {
      return setCityErr(true);
    } else if (!inputCountry) {
      return setCountryErr(true);
    }

    setCityErr(false);
    setCountryErr(false);

    try {
      const weatherRes = await dispatch(
        fetchWeather({
          city: inputCity,
          country: inputCountry,
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
      } else {
        dispatch(
          addSearchHistory({
            city: inputCity,
            country: inputCountry,
            timeStamp: moment().format(),
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

  function handleClearInput() {
    setInputCity("");
    setInputCountry("");
    setCityErr(false);
    setCountryErr(false);
  }

  // sole purpose of this is to populate the textfield
  // when search button is clicked in history section
  useEffect(() => {
    setInputCity(reduxCity);
    setInputCountry(reduxCountry);
  }, [reduxCity, reduxCountry]);

  return (
    <OuterGridStyled>
      <TypographyStyled variant="h4">Today's Weather</TypographyStyled>
      <DividerStyled />
      <GridStyled
        container
        columns={12}
        flexDirection={"row"}
        alignItems={"flex-start"}
        gap={1}
        rowGap={"20px"}
      >
        <GridStyled item xs={12} tablet={4} container>
          <TextFieldStyled
            label="Enter City"
            value={inputCity}
            onChange={(event) => setInputCity(event.target?.value)}
            error={cityErr}
            helperText={cityErr && "City is required"}
          />
        </GridStyled>
        <GridStyled item xs={12} tablet={4} container>
          <TextFieldStyled
            label="Enter Country"
            value={inputCountry}
            onChange={(event) => setInputCountry(event.target?.value)}
            error={countryErr}
            helperText={countryErr && "Country is required"}
          />
        </GridStyled>
        <GridStyled
          item
          xs={12}
          tablet={3}
          container
          justifyContent={"space-evenly"}
          alignItems={"center"}
          rowGap={"10px"}
        >
          <ButtonStyled variant="contained" onClick={handleSearch}>
            Search
          </ButtonStyled>
          <ButtonStyled variant="contained" onClick={handleClearInput}>
            Clear
          </ButtonStyled>
        </GridStyled>
      </GridStyled>
    </OuterGridStyled>
  );
}
