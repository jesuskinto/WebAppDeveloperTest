import { useEffect, useState } from "react";

import { Stack, Alert } from "@mui/material";

import "./App.css";
import { MemoizedAppTable } from "./components/AppTable";
import { MemoizedAppCardChart } from "./components/AppCardChart";
import { AppForm } from "./components/AppForm";

import { getPosts, createPost } from "./services/postService";

function App() {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [creatingPost, setCreatingPost] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [errorUploading, setErrorUploading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((response) => setPosts(response))
      .catch(() => setErrorLoading(true))
      .finally(() => setLoading(false));
  }, []);

  const handlePostTitleChange = (e) => {
    const newPostTitleValue = e.target.value;
    setPostTitle(`${newPostTitleValue}`);
  };

  const handlePostBodyChange = (e) => {
    const newPostBodyValue = e.target.value;
    setPostBody(`${newPostBodyValue}`);
  };

  const handleAddPost = () => {
    setCreatingPost(true);
    createPost({ postTitle: postTitle, postBody: postBody })
      .then((response) => {
        setPosts((posts) => [...posts, { ...response, id: posts.length + 1 }]);
        setErrorUploading(false);
        setPostTitle("");
        setPostBody("");
      })
      .catch(() => {
        setErrorUploading(true);
      })
      .finally(() => setCreatingPost(false));
  };

  return (
    <div className="App">
      <Stack spacing={2} direction="row">
        <AppForm
          postTitle={postTitle}
          handlePostTitleChange={handlePostTitleChange}
          postBody={postBody}
          handlePostBodyChange={handlePostBodyChange}
          handleAddPost={handleAddPost}
          creatingPost={creatingPost}
          errorUploading={errorUploading}
        />
        {loading ? (
          "loading..."
        ) : errorLoading ? (
          <Alert severity="error">An error occurred loading posts</Alert>
        ) : (
          <MemoizedAppTable posts={posts ?? []} />
        )}
        {loading ? null : <MemoizedAppCardChart posts={posts} />}
      </Stack>
    </div>
  );
}

export default App;
