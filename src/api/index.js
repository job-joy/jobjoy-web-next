import axios from "axios";

export const getAllProduct = (url) => {
  const data = axios.get(url);
  return data;
};

export const createCommentByUser = (body) => {
  const data = axios.post("/user", {
    firstName: "fred ",
    lastNAme:"F"
  });

  return data;
};

// export { getAllProduct };
