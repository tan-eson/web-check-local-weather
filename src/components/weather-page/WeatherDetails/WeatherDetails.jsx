import moment from "moment";
import {
  DetailTypography,
  GridStyled,
  LocationTypography,
  OuterGrid,
  WeatherTypography,
} from "./styles";

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
      <LocationTypography variant={"h6"}>
        {weatherData.city}, {weatherData.country}
      </LocationTypography>
      <WeatherTypography variant={"h3"} fontWeight={700}>
        {weatherData.weather}
      </WeatherTypography>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <DetailTypography variant={"body1"}>Description:</DetailTypography>
        </GridStyled>
        <GridStyled item>
          <DetailTypography variant={"body1"}>
            {weatherData.description}
          </DetailTypography>
        </GridStyled>
      </GridStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <DetailTypography variant={"body1"}>Temperature:</DetailTypography>
        </GridStyled>
        <GridStyled item>
          <DetailTypography variant={"body1"}>
            {weatherData.temperature}
          </DetailTypography>
        </GridStyled>
      </GridStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <DetailTypography variant={"body1"}>Humidity:</DetailTypography>
        </GridStyled>
        <GridStyled item>
          <DetailTypography variant={"body1"}>
            {weatherData.humidity}
          </DetailTypography>
        </GridStyled>
      </GridStyled>
      <GridStyled
        container
        gridTemplateColumns={"repeat(2, 1fr)"}
        columnGap={"30px"}
      >
        <GridStyled item>
          <DetailTypography variant={"body1"}>Time:</DetailTypography>
        </GridStyled>
        <GridStyled item>
          <DetailTypography variant={"body1"}>{formatDate}</DetailTypography>
        </GridStyled>
      </GridStyled>
    </OuterGrid>
  ) : null;
}
