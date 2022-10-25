import axios from "axios";

axios.defaults.baseURL = "https://february-21.herokuapp.com/api/v1/";

if(localStorage.getItem("token")){
  axios.defaults.headers.common["Authorization"] = `Token ${localStorage.getItem(
    "token"
  )}`;
}

