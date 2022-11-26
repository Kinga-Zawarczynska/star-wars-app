import { IStarship } from "../types/Starship";

type StarshipType = {
  starship: IStarship;
};

const StarshipCard = ({ starship }: StarshipType) => {
  return (
    <>
      <div>{starship.name}</div>
      <div>{starship.model}</div>
      <section>
        {starship.pilots.map((pilot, i) => <button>show pilot {i}</button>)}
      </section>
    </>
  );
};

export default StarshipCard;
