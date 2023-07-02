import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_SEARCH_HISTORY } from "../helpers/constants";

const initialState = {
  targetCity: "",
  targetCountry: "",
  weatherDetail: {},
  searchHistory: [],
  error: null,
};

const fetchWeather = createAsyncThunk(
  "weatherSlice/fetchWeather",
  async (payload) => {
    const { city, country, apiKey } = payload;

    // get weather data
    const weatherRawRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
    );

    if (weatherRawRes.status === 200) {
      return await weatherRawRes.json();
    } else {
      throw new Error("Request failed");
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateSearchKeyword: (state, action) => {
      const { city, country } = action.payload;
      state.targetCity = city ?? "";
      state.targetCountry = country ?? "";
    },
    hydateSearchHistory: (state, action) => {
      state.searchHistory = action.payload;
    },
    addSearchHistory: (state, action) => {
      /**
       * object should have format like this
       * {
            city: String,
            country: String,
            timeStamp: String (e.g. 2023-07-01T18:29:13+08:00),
          }
       */

      const newArr = [...state.searchHistory, action.payload];
      state.searchHistory = newArr;

      // limit to storing only 5 history, saves storage in local storage
      const lastFiveHistory = newArr.slice(-5);

      localStorage.setItem(
        LOCAL_STORAGE_SEARCH_HISTORY,
        JSON.stringify(lastFiveHistory)
      );
    },
    deleteSearchHistory: (state, action) => {
      const { city: _payloadCity, timeStamp: _payloadTimeStamp } =
        action.payload;

      // filter out target record from redux
      const filteredArr = [
        ...state.searchHistory.filter(
          (record) =>
            record.city !== _payloadCity ||
            record.timeStamp !== _payloadTimeStamp
        ),
      ];
      state.searchHistory = filteredArr;

      const lastFiveHistory = filteredArr.slice(-5);

      localStorage.setItem(
        LOCAL_STORAGE_SEARCH_HISTORY,
        JSON.stringify(lastFiveHistory)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // condition for if fetch weather API succeeds
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherDetail = action.payload ?? state.weatherDetail;
        state.error = null;
      })
      // if fetch weather API does not return code 200, update error state
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {
  updateSearchKeyword,
  hydateSearchHistory,
  addSearchHistory,
  deleteSearchHistory,
} = weatherSlice.actions;

export default weatherSlice.reducer;

export { fetchWeather };
