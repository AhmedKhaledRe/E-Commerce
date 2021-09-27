import React from "react";
import { withRouter } from "react-router-dom";
// @Material-UI
import { Toolbar, AppBar, Typography } from "@material-ui/core";
// Styles
import { useStyles } from "./headerStyles";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <Typography variant="h5" >E-Commerce</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
