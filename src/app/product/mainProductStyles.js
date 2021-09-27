import { makeStyles } from "@material-ui/core";
import { primaryColor } from "../../common/assets/jss/appStyles";

export const useStyles = makeStyles((theme) => ({
  root__slider: {
    border: `1px solid ${primaryColor}`,
    margin: "10px auto",
    padding: "5px",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    minWidth: 400
  },
  root__rating: {
    textAlign: "center",
  },
  Container: {
    position: "relative",
    marginTop: 30
  },
  filter: {
    margin: 25,
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  // Select Menu
  root: {
    position: "relative",
    minWidth: 150,
    margin: "10px",
    "& label.Mui-focused": {
      color: primaryColor,
    },
    "& .MuiInputLabel-outlined": {
      color: primaryColor,
    },
    "& .MuiSelect-iconOutlined": {
      color: primaryColor,
    },
    "& .MuiOutlinedInput-root": {
      color: primaryColor,
      height: 43,
      borderColor: primaryColor,
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      },
      "& fieldset": {
        borderColor: primaryColor,
      },
    },
  },
  select: {
    "& .MuiSelect-select:focus": {
      backgroundColor: "inherit",
    },
  },
  search: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  menus: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 120,
  },
}));