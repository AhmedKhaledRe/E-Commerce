import Http from '../../config/http'

const Services = {
  fetchCategories:async () => await Http.GET(`http://test-api.edfa3ly.io/category`),
  fetchProducts:async () => await Http.GET(`http://test-api.edfa3ly.io/product`),
};

export default Services;