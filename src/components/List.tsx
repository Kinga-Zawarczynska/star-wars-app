import { PEOPLE, PLANETS, STARSHIPS } from "../contants";
import { IData } from "../types/Data";
import { IPerson } from "../types/Person";
import { IPLanet } from "../types/Planet";
import { IStarship } from "../types/Starship";
import PersonCard from "./PersonCard";
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarshipCard";

type ListType = {
  param: string;
  starships: IStarship[];
  people: IPerson[];
  planets: IPLanet[]
};

const List = ({ param, starships, people, planets }: ListType) => {
  if (param === PEOPLE) {
    return (
      <div>
        {people.map((person: IPerson) => (
          <PersonCard person={person} key={person.name} />
        ))}
      </div>
    );
  }

  if (param === STARSHIPS) {
    return (
      <div>
        {starships.map((starship: IStarship) => (
          <StarshipCard starship={starship} key={starship.name} />
        ))}
      </div>
    );
  }

  if (param === PLANETS) {
    return (
      <div>
        {planets.map((planet: IPLanet) => (
          <PlanetCard planet={planet} key={planet.name} />
        ))}
      </div>
    );
  }

  return <div>No data available</div>;
};

export default List;
