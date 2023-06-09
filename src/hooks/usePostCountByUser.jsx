import { useEffect, useState } from 'react';

export const usePostCountByUser = (posts) => {
  const [countByUserId, setCountByUserId] = useState({});

  useEffect(() => {
    const countPostsByUser = () => {
      const countByUser = {};
      posts.forEach((post) => {
        const { userId } = post;
        countByUser[userId] = (countByUser[userId] || 0) + 1;
      });
      setCountByUserId(countByUser);
    };

    countPostsByUser();
  }, [posts]);

  return countByUserId;
};

export default usePostCountByUser;