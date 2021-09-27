import React, { Suspense, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../common/components/loading";
import NavBars from "../common/components/navbar/NavBars";
import CategoryNavigator from "./CategoryNavigator";
import ProductApp from "./product"
import { useLayoutStyles } from "../common/assets/jss/components/layout";
import { fetchingCategories, getCategories, fetchingProducts, getProducts } from "./state/actions";

function App ({ fetchingCategories, getCategories, fetchingProducts, getProducts }) {
  const defaultRoute = `/category`;
  const classes = useLayoutStyles();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchingCategories();
    getCategories();
    fetchingProducts();
    getProducts((products)=> setProductsData(products));
    return () => {}
  }, [])

  return (
    <div className={classes.root}>
      <NavBars />
      <main className={classes.content} id="screen">
        <div className={classes.toolbar} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path='/category'>
              <CategoryNavigator />
            </Route>
            <Route exact path="/category/:id">
              <ProductApp productsData={productsData}/>  
            </Route>
            <Redirect from="/" to={defaultRoute} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default compose(connect(null, { fetchingCategories, getCategories, fetchingProducts, getProducts }))(withRouter(App));
