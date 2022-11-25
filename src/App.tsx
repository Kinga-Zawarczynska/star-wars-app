import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import { fetchApi } from "./services/fetchSwapi";

function App() {
  const [param, setParam] = useState("people");
  const [people, setPeople] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApi(param)
      .then((res) => {
        setPeople(res.results);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch people data. Please try again.");
      });
  }, [param]);

  const handlePeopleClick = () => setParam("people");

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      <header className="app__header">
        <h1 className="app__header--title">In the galaxy far, far away...</h1>
        <span className="app__header--description">
          <p>
            War! The Republic is crumbling under attacks by the ruthless Sith
            Lord, Count Dooku. There are heroes on both sides. Evil is
            everywhere.
          </p>
          <p>Find your warriors, safe planet or starship you want to join!</p>
        </span>
        <button onClick={handlePeopleClick}>Show warriors</button>
      </header>
    </Fragment>
  );
}

export default App;
