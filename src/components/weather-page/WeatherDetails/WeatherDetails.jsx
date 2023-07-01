import moment from "moment";
import { useSelector } from "react-redux";
import {
  DetailTypography,
  GridStyled,
  LocationTypography,
  OuterGrid,
  WeatherTypography,
} from "./styles";

export default function WeatherDetails() {
  // Defaults to empty object / {}
  const weatherData = useSelector((state) => state.weather?.weatherDetail);

  // Empty object is still truthy, therefore we need to check using length
  let showHideFlag = Object.keys(weatherData).length > 0 ? true : false;

  const formatDate = moment().format("YYYY-MM-DD H:mm:ss A") ?? "";

  return showHideFlag ? (
    <OuterGrid>
      <LocationTypography variant={"h6"}>
        {weatherData.name ?? "-"}, {weatherData.sys?.country ?? "-"}
      </LocationTypography>
      <WeatherTypography variant={"h3"} fontWeight={700}>
        {(Array.isArray(weatherData.weather) && weatherData.weather[0]?.main) ??
          "-"}
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
            {(Array.isArray(weatherData.weather) &&
              weatherData.weather[0]?.description) ??
              "-"}
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
            {weatherData.main?.temp_min
              ? `${weatherData.main?.temp_min}˚C ~`
              : "-"}
            {weatherData.main?.temp_max
              ? ` ${weatherData.main?.temp_max}˚C`
              : "-"}
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
            {weatherData.main?.humidity + "%" ?? "-"}
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
