import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import PersonCard from "./components/PersonCard";
import { fetchApi, fetchNextPage } from "./services/fetchSwapi";
import { IPerson } from "./types/Person";

function App() {
  const [param, setParam] = useState("people");
  const [data, setData] = useState<{
    count: number | null;
    next: string | null;
    results: IPerson[];
  }>({ count: null, next: null, results: [] });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApi(param)
      .then((res) => {
        setData({ count: res.count, next: res.next, results: res.results });
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch people data. Please try again.");
      });
  }, [param]);

  const handlePeopleClick = () => setParam("people");
  const handlePlanetsClick = () => setParam("planets");
  const handleStarshipsClick = () => setParam("starships");

  const handleLoadMoreData = () =>
    fetchNextPage(data.next).then((res) =>
      setData({
        count: res?.count,
        next: res?.next,
        results: [...data.results, ...res?.results],
      })
    );

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
        <div className="app__header--buttons">
          <button onClick={handlePeopleClick}>Show warriors</button>
          <button onClick={handlePlanetsClick}>Show planets</button>
          <button onClick={handleStarshipsClick}>Show starships</button>
        </div>
      </header>
      <main className="app__main">
        {param === "people" &&
          data.results.map((person) => <PersonCard person={person} />)}
        {data.next && (
          <button onClick={handleLoadMoreData}>LOAD MORE DATA</button>
        )}
      </main>
    </Fragment>
  );
}

export default App;
