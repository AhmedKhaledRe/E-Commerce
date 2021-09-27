import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "../../../common/assets/jss/appStyles";
import TextField from "@material-ui/core/TextField";

const useStyls = makeStyles(() => ({
  root: {
    margin: "10px auto",
    "& label.Mui-focused": {
      color: primaryColor,
      
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      
      },
    },
  },
}));

const MuiTextField = ({
  label,
  size,
  type,
  name,
  input,
  disabled,
  multiline,
  required,
  placeholder,
  rows = 1,
  maxLength,
  meta: { touched, invalid, error },
}) => {
  const classes = useStyls();

  return (
    <TextField
      name={name}
      placeholder={placeholder}
      className={classes.root}
      multiline={multiline}
      rows={rows}
      label={label}
      size={size}
      inputProps={maxLength && { maxLength: maxLength + 1 }}
      disabled={disabled}
      type={type}
      required={required}
      InputLabelProps={
        (type === "date" || type === "time" || placeholder) ? {shrink: true} : null
      }
      margin="normal"
      variant="outlined"
      fullWidth
      helperText={(touched && error && error)}
      error={((touched && invalid) || (maxLength < input.value.length))}
      {...input}
    />
  );
};

export default MuiTextField;
