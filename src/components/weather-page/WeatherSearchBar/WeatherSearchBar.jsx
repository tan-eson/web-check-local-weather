import { useState } from "react";
import {
  ButtonStyled,
  DividerStyled,
  ErrorGrid,
  GridStyled,
  InputBaseStyled,
  InputLabelStyled,
  OuterGridStyled,
  TypographyStyled,
} from "./styles";

export default function WeatherSearchBar() {
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [showError, setShowError] = useState(false);

  async function handleSearch() {
    //

    // set show error if no api call returns error / no data
    setShowError(true);
  }

  async function handleClearInput() {
    //
  }

  return (
    <OuterGridStyled>
      <TypographyStyled variant="h1">Today's Weather</TypographyStyled>
      <DividerStyled />
      <GridStyled
        container
        columns={12}
        flexDirection={"row"}
        alignItems={"center"}
        gap={1}
        marginBottom={"10px"}
      >
        <GridStyled item xs={12} tablet={4} container>
          <InputLabelStyled>City</InputLabelStyled>
          <InputBaseStyled
            placeholder="Enter City"
            value={inputCity}
            onChange={(event) => setInputCity(event.target?.value)}
          />
        </GridStyled>
        <GridStyled item xs={12} tablet={4} container>
          <InputLabelStyled>Country</InputLabelStyled>
          <InputBaseStyled
            placeholder="Enter Country"
            value={inputCountry}
            onChange={(event) => setInputCountry(event.target?.value)}
          />
        </GridStyled>
        <GridStyled
          item
          xs={12}
          tablet={3}
          container
          justifyContent={"space-evenly"}
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
          <TypographyStyled>Not found</TypographyStyled>
        </ErrorGrid>
      ) : null}
    </OuterGridStyled>
  );
}
