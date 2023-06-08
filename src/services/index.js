const url = 'https://jsonplaceholder.typicode.com/posts'

export const sendPost = async (title, body) => {
   
    try {
      const response = await fetch( url, {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      return await response.json();
     
    } catch (e) {
      console.warn('Hubo un problema con la petición Fetch:', e)
    }

  }


  export const getPosts = async () => {
    try {
      const response = await fetch(url);
     return await response.json();

    } catch (e) {
      console.warn('Hubo un problema con la petición Fetch:', e)
    }

  };