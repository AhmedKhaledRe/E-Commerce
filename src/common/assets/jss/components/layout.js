import { makeStyles } from "@material-ui/core";

export const useLayoutStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    maxWidth: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

