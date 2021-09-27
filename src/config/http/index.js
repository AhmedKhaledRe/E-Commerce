import axios from "axios";

// configure axios
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const POST = async (url, data) => {
  const res = await axios.post(url, data);
  return res;
};

const PUT = async (url, data) => {
  const res = await axios.put(url, data);
  return res;
};

const DELETE = async (url, data, dataObject) => {
  const dataSent = dataObject ? { data : data } : { data : { data : data } };
  const res = await axios.delete(url, {
    ...dataSent,
  });
  return res;
};

const GET = async (url) => {
  const res = await axios.get(url);
  return res;
};

const exportedObject = {POST, GET, PUT, DELETE};

export default exportedObject;