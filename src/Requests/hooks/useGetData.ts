import React from "react";

type UseGetData = [
  (url: string) => Promise<void>,
  {
    data: any;
    loading: boolean;
    error: any;
  }
];

const baseUrl = "http://127.0.0.1:3001/";

export const useGetData = (): UseGetData => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  const getData = async (url = "") => {
    console.log("address: ", `${baseUrl}${url}`);
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return await response.json();
  };

  const fetchData = async (url: string) => {
    try {
      const data = await getData(url);
      setData(() => data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError(error);
      setLoading(false);
    }
  };

  return [fetchData, { data, error, loading }];
};
