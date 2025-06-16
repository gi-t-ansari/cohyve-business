import { createTheme } from "@mui/material";

// for calendar
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E1FF26",
    },
    text: {
      primary: "#FCFCD8",
    },
  },
  components: {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: "#FCFCD8",
          "&.Mui-selected": {
            backgroundColor: "#E1FF26",
            color: "#333",
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        switchHeader: {
          color: "#FCFCD8",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FCFCD8",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#E1FF26",
        },
      },
    },
  },
});

// for time zone
export const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderWidth: "0px",
    borderColor: "transparent",
    padding: "0.5rem",
    color: "#FCFCD8",
    cursor: "pointer",
    boxShadow: "none",
    "&:hover": { borderColor: "transparent" },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#FCFCD8",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.5)",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#333333",
    color: "#FCFCD8",
    width: "300px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "rgba(255, 255, 255, 0.1)"
      : "transparent",
    color: state.isFocused ? "#FCFCD8" : "rgba(255, 255, 255, 0.8)",
    cursor: "pointer",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.5)",
    "&:hover": { color: "#FCFCD8" },
  }),
  indicatorSeparator: () => ({ display: "none" }),
};
