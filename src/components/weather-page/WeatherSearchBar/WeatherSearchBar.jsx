import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_WEATHER_FAILED } from "../../../redux/types";
import { addSearchHistory, fetchWeather } from "../../../redux/weatherSlice";
import {
  ButtonStyled,
  DividerStyled,
  ErrorGrid,
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
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const apiErrorMsg = useSelector((state) => state.weather.error);

  async function handleSearch() {
    if (!inputCity) {
      return setCityErr(true);
    } else if (!inputCountry) {
      return setCountryErr(true);
    }

    setShowError(false);
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
        setShowError(true);
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
      setShowError(true);
    }
  }

  async function handleClearInput() {
    setInputCity("");
    setInputCountry("");
    setCityErr(false);
    setCountryErr(false);
    setShowError(false);
  }

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
      {showError ? (
        <ErrorGrid container>
          <TypographyStyled>{apiErrorMsg ?? "Not found"}</TypographyStyled>
        </ErrorGrid>
      ) : null}
    </OuterGridStyled>
  );
}
