import { useQuery } from "@tanstack/react-query";

const URL = "https://jsonplaceholder.typicode.com/posts";

const getPostById = async (postId) => {
  const response = await fetch(`${URL}/${postId}`);
  return response.json();
};

export const usePostById = (postId) => {
  return useQuery(["posts", postId], () => getPostById(postId), {
    enabled: !!postId,
  });
};
