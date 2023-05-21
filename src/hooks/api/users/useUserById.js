import { useQuery } from "@tanstack/react-query";

const URL = "https://jsonplaceholder.typicode.com/users";

const getUserById = async (userId) => {
  const response = await fetch(`${URL}/${userId}`);
  return response.json();
};

export const useUserById = (userId) => {
  return useQuery(["users", userId], () => getUserById(userId), {
    enabled: !!userId,
  });
};
