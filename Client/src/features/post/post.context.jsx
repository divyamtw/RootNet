import { createContext, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState(null);
  const [error, setError] = useState(null);

  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        loading,
        setLoading,
        feed,
        setFeed,
        error,
        setError,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
