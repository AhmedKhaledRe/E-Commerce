import { makeStyles } from "@material-ui/core/styles";
import { whiteColor, tealColor } from "../../../common/assets/jss/appStyles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: tealColor,
    height: 50,
  },
  header: {
    backgroundColor: tealColor,
    color: whiteColor,
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    "&.MuiToolbar-root": {
      borderBottomStyle: "inset",
    },
  }
}),{ index: 1 });
