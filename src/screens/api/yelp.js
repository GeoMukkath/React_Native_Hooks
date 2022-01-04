import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "BearerYHrmVW_hkn1tcvHFLjFgylel60zo5HjfCHEXQPXWGUariQnzvNksXJJKCA66_Bw4ELA80zmZm4gOjDrDGvCUZDTvrtE349bK-WwmPQeZysavFKYs601Ch38aGZLOYXYx",
  },
});
