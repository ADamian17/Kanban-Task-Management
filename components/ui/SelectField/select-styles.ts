import { StylesConfig } from "react-select";

export const customSelectStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "var(--default-input-bg)",
    border: `1px solid ${isFocused ? "var(--main-purple)" : "var(--default-border - color)"}`,
    borderRadius: 4,
    cursor: "pointer",
    outline: `1px solid ${isFocused ? "var(--main-purple)" : "transparent"}`,
    ":hover": {
      border: "1px solid var(--main-purple)",
      outline: "1px solid var(--main-purple)"
    }
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--default-input-bg)",
    padding: 10,
    borderRadius: 8
  }),
  option: (styles, { isSelected, isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? undefined
      : isSelected
        ? "var(--main-purple)"
        : isFocused
          ? "var(--light-purple)"
          : undefined,
    borderRadius: 4,
    color: isSelected ? "var(--white)" : "var(--medium-grey)",
    cursor: "pointer",
    fontFamily: "var(--font-plus-jakarta)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "23px",
    padding: 6,
    ":active": {
      ...styles[":active"],
      backgroundColor: "var(--light-purple)"
    },
    ":not(:last-child)": {
      marginBottom: 8
    }
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles })
};
