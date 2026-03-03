import React, { useEffect } from "react";
import { usePost } from "../hooks/usePost";

const Feed = () => {
  const { feed, loading, handleGetFeed } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }

  return (
    <div>
      <h2>{feed[1].caption}</h2>
      <h5>{feed[1].user.username}</h5>
      <img src={feed[1].img} alt="img" height={200} />
    </div>
  );
};

export default Feed;
