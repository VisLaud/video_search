import axios from "axios";

const KEY = "AIzaSyAVj79ylFLzvESHQ7l65c01DB65Otb1E9w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
