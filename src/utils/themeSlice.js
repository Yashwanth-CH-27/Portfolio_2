import { createSlice } from "@reduxjs/toolkit";


const storedTheme = localStorage.getItem("theme");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: storedTheme ? storedTheme === "dark" : true, // default dark
  },
  reducers: {
    addToggleFeature: (state) => {
      state.theme = !state.theme;
      const themeValue = state.theme ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", themeValue);
      localStorage.setItem("theme", themeValue);
    }
  }
});


export const {addToggleFeature} = themeSlice.actions;

export default themeSlice.reducer;