import axios from "axios";

export const getAllProduct = (url: string) => {
  const data = axios.get(url);
  return data;
};

export const createCommentByUser = (body: any) => {
  const data = axios.post("/user", {
    firstName: "fred ",
    lastNAme:"F"
  });

  return data;
};
