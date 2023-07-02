import { Fragment } from "react";
import SharedSnackbar from "../../components/shared/SharedSnackbar";
import WeatherDetails from "../../components/weather-page/WeatherDetails/WeatherDetails";
import WeatherHistory from "../../components/weather-page/WeatherHistory/WeatherHistory";
import WeatherSearchBar from "../../components/weather-page/WeatherSearchBar/WeatherSearchBar";

export default function WeatherPage() {
  return (
    <Fragment>
      <WeatherSearchBar />
      <WeatherDetails />
      <WeatherHistory />
      <SharedSnackbar />
    </Fragment>
  );
}
