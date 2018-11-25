import { dummyIssues } from "./dummy";

export const allIssues = async () => {
  const data = { allIssues: dummyIssues };
  return data;
}