import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { compose } from "recompose";
import { connect } from "react-redux";
// @Material-UI
import { MenuItem, Zoom, Slider, Typography, IconButton } from "@material-ui/core";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import SearchField from '../../common/components/searchField/SearchField';
import { Close } from '@material-ui/icons';
// styles
import { useStyles } from './mainProductStyles';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

const MainProduct = ({ children, filters, setData, form, loaded, dataTable, min, max }) => {
  const classes = useStyles();
  const [valueScroll, setValueScroll] = useState([min, max]);
  const [filterData, setFilterData] = useState({Rate: [], Color: []})
  let newFilter = { ...filterData, Color: [], Rate: [] };

  // set Filter Date to default value
  const handleSetDefaultFilter = () => {
    setFilterData(newFilter);
    clearScroll();
  }

  const handleChangeScroll = (event, newValue) => {
    setValueScroll(newValue);
    handleFilter("", newValue[0], newValue[1]);
  };

  const clearScroll = () => {
    setValueScroll([min, max]);
    handleFilter("", min, max);
  }

  // Extract every value from the objects
  const getObjectValues = (obj) => (obj && typeof obj === 'object')
    ? Object.values(obj).map(getObjectValues).flat()
    : [obj]

  const handleSearch = (value) => {
    // set Filter To Default
    handleSetDefaultFilter();

    if (value?.query?.length > 0) {
      // if the user tried to search for a specific products
      let filteredData = dataTable
        .filter((pr) => 
          [...getObjectValues(pr)]
            .join(" ").toLowerCase().includes(""+value.query.toLowerCase()));

      setData(filteredData);
    } 
    else setData(dataTable);
  }

  const handleFilter = (e, from, to) => {
    let filterName = e?.target?.name;
    let filterNewValue = e?.target?.value;

    // remove value from search box
    delete form?.search?.values?.query;

    if (filterNewValue && filterNewValue.includes("all") && !filterData[filterName].includes("all")) {
      filterNewValue = filters.find(fi => fi.name === filterName).items;
    }  
    else if (filterNewValue && filterData[filterName].includes("all") && !filterNewValue.includes("all")) {
      filterNewValue = [];
    }
    
    const newFilter = filterName ? { ...filterData, [filterName]: filterNewValue, query: ""} : { ...filterData, query: ""};
    setData(dataTable.filter(prod => {
      return (+prod.price >= +(from || valueScroll[0]) && +prod.price <= (+to || valueScroll[1]))
        && (newFilter.Color.length > 0 ? ((newFilter.Color).includes(prod.color)) : true)
        && (newFilter.Rate.length > 0 ? ((newFilter.Rate).includes(+prod.rating)) : true);
    }));
    setFilterData(newFilter);
  }


  const renderFilters = () => {
    return filters.map((filter, index) => {
      return(
        <FormControl key={index} variant="outlined" className={classes.formControl}>
          <InputLabel>{filter?.label}</InputLabel>
          <Select 
            MenuProps={MenuProps}
            multiple className={classes.select} name={filter?.name} label={filter?.label} value={filterData[filter?.name]} onChange={(e) => handleFilter(e)}>
            {filter?.items?.length > 0 && filter?.items.map((item, index) => {
              return(
                <MenuItem key={index} value={item} style={filter?.name === "Color" ? {backgroundColor: item, opacity: filterData[filter?.name].includes(item) ? 1 : 0.5} : {opacity: filterData[filter?.name].includes(item) ? 1 : 0.5}}>
                  {`${item} ${filter?.name}`}
                </MenuItem>
            )})}
          </Select>
        </FormControl>)})
  }

  return (
    <div className={classes.Container}>
      {loaded &&
        <Zoom in>
          <div className={classes.filter}>
            <div className={classes.search}>
              <SearchField onChange={handleSearch} />
            </div>
            <div className={classes.menus}>
              {renderFilters()}
            </div>
            <div className={classes.root__slider}>
              <Typography id="range-slider" gutterBottom style={{minWidth : 100, textAlign: 'center'}} >
                Price range
              </Typography>
              <Slider
                value={valueScroll}
                onChange={handleChangeScroll}
                min={min}
                max={max}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={(value) => `${value}`}
              />
              <IconButton onClick={() => clearScroll()} style={{marginLeft:"10px"}}>
                <Close />
              </IconButton>
            </div>
          </div>
        </Zoom>
      }
      {children}
    </div>
  )
}

const mapStateToProps = ({ form }) => ({ form });

export default compose(connect(mapStateToProps, { }))(withRouter(MainProduct));