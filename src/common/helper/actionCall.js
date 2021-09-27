export default async function actionCall (options, dispatch, callback) {
    try {
      // call the service
      const { data } = await options.service() || "";
      // dispatch action to redux
      dispatch({ type: options.success, payload: options.payload || options.dataPath ? data[options.dataPath] : data });
      // if there is callback function call it!
      callback && callback(data);
      return data;
    } catch (err) {
      console.log(err);
    }
}
