import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Run code and don't run it again after it loads
    // Listens and anytime the database changes or deletes, it grabs the snapshot and gives it to us
    db.collection("posts").onSnapshot((snapshot) =>
      // Go and get all the documents that camback in the snapshot
      // Map through it and for every single doc, map and get the doc data (displayName, text, ...)
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text} // Change - should be pulling the document id from firebase and use that as the key
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
