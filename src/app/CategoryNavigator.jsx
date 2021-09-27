import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { primaryColor } from '../common/assets/jss/appStyles';
import Loading from '../common/components/loading';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        minHeight: 400,
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderRadius: 4
    },
    category__container: {
        margin: "20px",
        borderRadius: 4
    },
    category: {
        minHeight: 200,
        minWidth: 200,
        backgroundColor: '#fff',
        transition: '.3s',
        '&:hover': {
            transform: 'scale(1.05)'
        },
    },
    category__image: {
        maxWidth: 200,
        maxHeight: 180,
        margin: 'auto'
    },
    category__typo: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: 1.6,
        color: primaryColor
    }
}))

const CategoryNavigator = ({ categories }) => {
    const classes = useStyles();

    const renderCategories = () => (
        <>
            {/* header category */}
            <Grid item xs={12}>
                <div className={classes.header}>
                    <Typography variant="h5">Browse Category</Typography>
                </div>
            </Grid>

            {/* all Categories */}
            <Grid container justifyContent="center" alignItems="center">
                {categories.loaded && categories.data.length > 0 && 
                    categories?.data?.map((cat) => {
                        return(
                            <Grid item xs={11} md={3} key={cat.id} className={classes.category__container}>
                                <Link to={`/category/${cat.id}`}>
                                    <Paper elevation={1} className={classes.category}>
                                        <div className={classes.category__image}>
                                            <img src={cat.image} alt="logo" style={{ maxWidth: 200, maxHeight: 180 }} />
                                        </div>
                                        <Typography align="center" className={classes.category__typo}>{cat.name}</Typography>
                                    </Paper>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )

    return (
        <Grid container className={classes.container} spacing={4}>
            {categories.loaded ? renderCategories() : <Loading/>}
        </Grid>
    );
}

const mapStateToProps = ({ categoryApp }) => ({ categories: categoryApp.categories });

export default compose(connect(mapStateToProps, {}))(withRouter(CategoryNavigator));