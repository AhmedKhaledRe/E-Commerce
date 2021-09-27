import React from "react";
import { reduxForm, Field } from "redux-form";
import { makeStyles } from "@material-ui/core";
import MuiTextField from "../muiTextField/MuiTextField";
import { primaryColor, primaryColorHover, whiteColor } from "../../../common/assets/jss/appStyles";

const useStyles = makeStyles((theme) => ({
  // Search Field
  search: {
    maxWidth: 350,
    margin: "10px",
    padding: 5,
    position: "relative",
    borderRadius: 4,
    display: "flex",
    "& .MuiOutlinedInput-input": {
      padding: "12px",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
  },
  searchBtn: {
    margin: 10,
    height: 40,
    width: 40,
    alignSelf: "center",
    textTransform: "capitalize",
    backgroundColor: primaryColor,
    '&:hover': {
      backgroundColor: primaryColorHover,
    },
    color: whiteColor
  },
}));

const SearchField = ({ handleSubmit, onChange }) => {
  const classes = useStyles();
  const submit = (values) => onChange(values);

  return (
    <form
      className={classes.search}
      onSubmit={handleSubmit((values) => submit(values))}
    >
      <Field
        name="query"
        type="text"
        placeholder={"search"}
        component={MuiTextField}
      />
    </form>
  );
};

export default reduxForm({ form: "search" })(SearchField);