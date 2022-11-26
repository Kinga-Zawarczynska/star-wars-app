import { PEOPLE, STARSHIPS } from "../contants";
import { IData } from "../types/Data";
import { IPerson } from "../types/Person";
import { IStarship } from "../types/Starship";
import PersonCard from "./PersonCard";
import StarshipCard from "./StarshipCard";

type ListType = {
  param: string;
  starships: IStarship[];
  people: IPerson[];
};

const List = ({ param, starships, people }: ListType) => {
  if (param === PEOPLE) {
    return (
      <div>
        {people.map((person: IPerson) => (
          <PersonCard person={person} />
        ))}
      </div>
    );
  }

  if (param === STARSHIPS) {
    return (
      <div>
        {starships.map((starship: IStarship) => (
          <StarshipCard starship={starship} />
        ))}
      </div>
    );
  }

  return <div>No data available</div>;
};

export default List;
