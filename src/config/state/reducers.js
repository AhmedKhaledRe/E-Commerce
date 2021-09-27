import { reducer as formReducer } from "redux-form";
import productAppReducer from "../../app/state";
import categoryAppReducer from "../../app/state";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  form: formReducer,
  categoryApp: categoryAppReducer,
  productApp: productAppReducer,
};
