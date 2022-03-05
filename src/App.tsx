import React, { useEffect } from "react";
import { useGetData } from "./Requests/hooks/useGetData";
import "./App.css";

function App() {
  const [fetchData, { data, error, loading }] = useGetData();

  useEffect(() => {
    fetchData("hi/");
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <div className="App">{}</div>;
}

export default App;
