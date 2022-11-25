import { URL } from "../contants";

const headers = { "Content-Type": "application/json" };

export const fetchApi = async (
  param: string
): Promise<{ results: any; count: number; next: string }> => {
  const fetchUrl = `${URL}${param}`;

  return fetch(fetchUrl, {
    headers,
    mode: 'cors'
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log({
        count: data.count,
        results: data.results,
        next: data.next,
      });
      return {
        count: data.count,
        results: data.results,
        next: data.next,
      };
    });
};

export const fetchNextPage = async (url: string | null) => {
  if (!url) {
    return null;
  }
  return fetch(url, {
    headers,
    mode: 'cors'
  })
    .then((resp) => resp.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
        next: data.next,
      };
    });
};
