import { ResponseType } from "../types/response";

export const fetcherURL = async (): Promise<ResponseType[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  return res.json();
};

export const fetcherLocalStorage = async (): Promise<ResponseType[]> => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export const fetcherMock = async (): Promise<ResponseType[]> => {
  return [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
  ];
};
