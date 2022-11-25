import { URL } from "../contants";

export const fetchApi = async (param: string): Promise<{results: any, count: number, next: string, previous: string}> => {
  let headers = { "Content-Type": "application/json" };
  const fetchUrl = `${URL}${param}`

  return fetch(fetchUrl, {
    headers,
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log({
        count: data.count,
        results: data.results,
        next: data.next,
        previous: data.previous,
      });
      return {
        count: data.count,
        results: data.results,
        next: data.next,
        previous: data.previous,
      };
    });
};
