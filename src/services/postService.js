const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = async () => {
  try {
    const data = await fetch(BASE_URL);
    if (!data.ok) {
      throw new Error(`HTTP error status: ${data.status}`);
    }
    const json = await data.json();
    return json;
  } catch {
    throw new Error(`HTTP error`);
  }
};

export const createPost = async ({ postTitle, postBody }) => {
  try {
    const data = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!data.ok) {
      throw new Error(`HTTP error status: ${data.status}`);
    }

    const json = await data.json();
    return json;
  } catch (error) {
    throw new Error(`HTTP error`);
  }
};
