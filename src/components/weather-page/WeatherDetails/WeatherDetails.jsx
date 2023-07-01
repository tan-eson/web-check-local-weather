import moment from "moment";
import { GridStyled, OuterGrid, TypographyStyled } from "./styles";

export default function WeatherDetails() {
  // useSelector here to listen to redux of the current weather detail

  const weatherData = {
    city: "Johor",
    country: "MY",
    weather: "cloudy",
    description: "scattered clouds",
    temperature: "30˚c ~ 40˚c",
    humidity: "58%",
    time: "2023-07-01T16:13:01+08:00",
  };

  const formatDate = moment(weatherData.time).format("MMMM Do YYYY, h:mm:ss a");

  return weatherData ? (
    <OuterGrid>
      <TypographyStyled variant={"h6"}>
        {weatherData.city}, {weatherData.country}
      </TypographyStyled>
      <TypographyStyled variant={"h3"} fontWeight={700}>
        {weatherData.weather}
      </TypographyStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <TypographyStyled variant={"body1"}>Description:</TypographyStyled>
        </GridStyled>
        <GridStyled item>
          <TypographyStyled variant={"body1"}>
            {weatherData.description}
          </TypographyStyled>
        </GridStyled>
      </GridStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <TypographyStyled variant={"body1"}>Temperature:</TypographyStyled>
        </GridStyled>
        <GridStyled item>
          <TypographyStyled variant={"body1"}>
            {weatherData.temperature}
          </TypographyStyled>
        </GridStyled>
      </GridStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <TypographyStyled variant={"body1"}>Humidity:</TypographyStyled>
        </GridStyled>
        <GridStyled item>
          <TypographyStyled variant={"body1"}>
            {weatherData.humidity}
          </TypographyStyled>
        </GridStyled>
      </GridStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <TypographyStyled variant={"body1"}>Time:</TypographyStyled>
        </GridStyled>
        <GridStyled item>
          <TypographyStyled variant={"body1"}>{formatDate}</TypographyStyled>
        </GridStyled>
      </GridStyled>
    </OuterGrid>
  ) : null;
}
