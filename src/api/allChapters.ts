import { dummyChapters } from "./dummy";

export const allChapters = async () => {
  const data = { allChapters: dummyChapters };
  return data;
}