import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from "recompose";
// @Material-UI
import { Typography, Paper, Grid, Slide, IconButton } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import FILTERS from '../../common/helper/filters';
import MainProduct from "./MainProduct";
// Styles
import { useStyles } from "./productsStyles";
import { ArrowBack } from "@material-ui/icons";

const Products = ({ products, match, history, productsData }) => {
    const classes = useStyles();
    const { id } = match.params;
    const [ filteredProducts, setFilteredProducts ] = useState(productsData.filter(pr => +pr.categoryId === +id));

    const FiltersArray = () => {
        return [
            {...FILTERS.rate, items: [...FILTERS.rate.items, ...new Set(productsData.filter(pr => +pr.categoryId === +id).map(item => item.rating))].sort((x, y) => x - y)}, 
            {...FILTERS.color, items: [...FILTERS.color.items, ...new Set(productsData.filter(pr => +pr.categoryId === +id).map(item => item.color))].sort()}, 
        ];
    }

    return (
        <Slide in direction="right">
            <div className={classes.mainProducts}>
                <IconButton onClick={() => history.push("/category")} color="primary" className={classes.back} >
                    <ArrowBack />
                </IconButton>
                <MainProduct
                    dataTable={productsData.filter(pr => +pr.categoryId === +id)}
                    loaded={products?.loaded}
                    setData={setFilteredProducts}
                    filters={FiltersArray()}
                    min={Math.min(...productsData.filter(pr => +pr.categoryId === +id).map(item => item.price))}
                    max={Math.max(...productsData.filter(pr => +pr.categoryId === +id).map(item => item.price))}
                >
                    <Grid container justifyContent="center" alignItems="center">
                        {(filteredProducts.length > 0 ? 
                            filteredProducts.map((product) => {
                                return (
                                    <Grid item xs={11} md={3} key={product.id}className={classes.product__container}>
                                        <Paper elevation={1} className={classes.product}>
                                            <div className={classes.product__image} style={{backgroundColor: product.color}} >
                                                <img src={product.image} alt="logo" style={{ maxWidth: 200, maxHeight: 180 }} />
                                            </div>
                                            <Typography align="center" className={classes.product__typo}>{product.name}</Typography>
                                            <Typography align="center" className={classes.product__typo__price}>{product.price} {product.currency}</Typography>
                                            <div className={classes.root__rating}>
                                                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                                            </div>
                                        </Paper>
                                    </Grid>
                                )
                            })
                            : <Typography color="error" variant="h4" >No Data Exist!!</Typography>
                        )}
                    </Grid>
                </MainProduct>
            </div>
        </Slide>
    );
}

const mapStateToProps = ({ productApp }) => ({ products: productApp.products });

export default compose(connect(mapStateToProps, {}))(withRouter(Products));