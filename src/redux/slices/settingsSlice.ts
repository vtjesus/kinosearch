import { createSlice } from "@reduxjs/toolkit";

type SettingsSliceType = {
  themeStyle: "dark" | "light";
};

const settingsInitialState: SettingsSliceType = {
  themeStyle:
    (localStorage.getItem("themeStyle") as "dark" | "light") ?? "light",
};

const updateThemeAttribute = (theme: "dark" | "light") => {
  document.documentElement.setAttribute("data-theme", theme);
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: settingsInitialState,
  reducers: {
    toggleThemeStyle: (state) => {
      state.themeStyle = state.themeStyle === "dark" ? "light" : "dark";

      localStorage.setItem("themeStyle", state.themeStyle);

      updateThemeAttribute(state.themeStyle);
    },
    setThemeStyle: (state, action) => {
      state.themeStyle = action.payload;

      localStorage.setItem("themeStyle", state.themeStyle);

      updateThemeAttribute(state.themeStyle);
    },
  },
});

export const settingsActions = {
  ...settingsSlice.actions,
};

updateThemeAttribute(settingsInitialState.themeStyle);
