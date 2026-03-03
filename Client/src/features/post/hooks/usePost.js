import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";

const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, feed, setFeed, error, setError } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFeed();
      setFeed(data.feed);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, feed, handleGetFeed };
};

export { usePost };
