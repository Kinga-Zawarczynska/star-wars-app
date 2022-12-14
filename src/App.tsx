import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import List from "./components/List";
import { PEOPLE, PLANETS, STARSHIPS } from "./contants";
import { fetchApi, fetchNextPage } from "./services/fetchSwapi";
import { IData } from "./types/Data";
import bb8Spinner from "./images/bb8-spinner.svg";

function App() {
  const initialState = {
    starships: { count: null, next: null, results: [] },
    people: { count: null, next: null, results: [] },
    planets: { count: null, next: null, results: [] },
  };

  const [param, setParam] = useState(PEOPLE);
  const [data, setData] = useState<IData>(initialState);
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data[param as keyof IData].results.length === 0) {
      setLoading(true);
      fetchApi(param)
        .then((res) => {
          setData({
            ...data,
            [param]: { count: res.count, next: res.next, results: res.results },
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to fetch data. Please try again.");
        });
    }
  }, [param]);

  const handlePeopleClick = () => setParam(PEOPLE);
  const handlePlanetsClick = () => setParam(PLANETS);
  const handleStarshipsClick = () => setParam(STARSHIPS);

  const handleLoadMoreData = () =>
    fetchNextPage(data[param as keyof IData].next).then((res) =>
      setData({
        ...data,
        [param]: {
          count: res?.count,
          next: res?.next,
          results: [...data[param as keyof IData].results, ...res?.results],
        },
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
        <>
          {loading ? (
            <div>
              loading...
              <img src={bb8Spinner} alt="bb8SpinnerLoading" />
            </div>
          ) : (
            <>
              List of {param}
              <List
                param={param}
                starships={data.starships?.results}
                people={data.people?.results}
                planets={data.planets?.results}
              />
              {data[param as keyof IData].next && (
                <button onClick={handleLoadMoreData}>LOAD MORE DATA</button>
              )}
            </>
          )}
        </>
      </main>
    </Fragment>
  );
}
export default App;
