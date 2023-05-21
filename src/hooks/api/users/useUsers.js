import { useQuery } from "@tanstack/react-query";

const URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const useUsers = () => {
  return useQuery(["users"], getUsers, {
    placeholderData: [],
  });
};
