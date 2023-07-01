import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetCity: "",
  targetCountry: "",
  weatherDetail: {},
  searchHistory: [],
  error: null,
};

const fetchWeather = createAsyncThunk(
  "weatherSlice/fetchWeather",
  async (payload, thunkApi) => {
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

      localStorage.setItem("search-history", JSON.stringify(newArr));
    },
    deleteSearchHistory: (state, action) => {
      const { city: _payloadCity, timeStamp: _payloadTimeStamp } =
        action.payload;

      const filteredArr = [
        ...state.searchHistory.filter(
          (record) =>
            record.city !== _payloadCity ||
            record.timeStamp !== _payloadTimeStamp
        ),
      ];

      // filter out target record from redux
      state.searchHistory = filteredArr;

      localStorage.setItem("search-history", JSON.stringify(filteredArr));
    },
  },
  extraReducers: (builder) => {
    builder
      // condition for if fetch weather succeeds
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherDetail = action.payload ?? state.weatherDetail;
        state.error = null;
      })
      // if fetch weather fail, update error state
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { updateSearchKeyword, addSearchHistory, deleteSearchHistory } =
  weatherSlice.actions;

export default weatherSlice.reducer;

export { fetchWeather };
