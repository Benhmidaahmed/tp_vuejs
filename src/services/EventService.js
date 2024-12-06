import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Benhmidaahmed/Hello-World-Vue/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id)
  {
    console.log("ID envoyé :", id);
    return axios.get(`https://my-json-server.typicode.com/Benhmidaahmed/Hello-World-Vue/events/${id}`);

  }
};
