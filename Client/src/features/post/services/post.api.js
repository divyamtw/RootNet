import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/post",
  withCredentials: true,
});

const handleError = (error, Msg) => {
  throw new Error(error?.response?.data?.message || Msg);
};

const getFeed = async () => {
  try {
    const { data } = await api.get("/feed");
    return data;
  } catch (error) {
    handleError(error, "Fetching feed failed.");
  }
};

const handleCreatePost = (data) => {
  console.log(data);
};

export { getFeed, handleCreatePost };
