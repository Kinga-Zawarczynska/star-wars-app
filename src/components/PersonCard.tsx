import { IPerson } from "../types/Person";

type PersonType = {
  person: IPerson;
};

const PersonCard = ({ person }: PersonType) => {
  return (
    <section className="person">
      <div className="person__info">
        <div>Name: {person.name}</div>
        <div>Year of birth: {person.birth_year}</div>
        <div>Gender: {person.gender}</div>
        <div>Height: {person.height}</div>
      </div>
      <button>GO TO DETAILS</button>
      <div className="person__vehicles">
        {person.starships.length > 0 && (
          <>
            <span>Starships:</span>
            {person.starships.map((item, i) => (
              <a key={item + i}>{`Starship ${i}`}</a>
            ))}
          </>
        )}

        {person.vehicles.length > 0 && (
          <>
            <span>Vehicles:</span>
            {person.vehicles.map((veh, i) => (
              <a key={veh + i}>{`Vehivle ${i}`}</a>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default PersonCard;
