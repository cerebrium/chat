import React, { useEffect } from "react";
import { useGetData } from "./Requests/hooks/useGetData";
import "./App.css";

function App() {
  const [fetchData, { data, error, loading }] = useGetData();

  useEffect(() => {
    fetchData("hi/");
  }, []);

  return <div className="App">{!loading && !error && data}</div>;
}

export default App;
