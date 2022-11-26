import { useState, useEffect } from "react";
import { fetchPerson } from "../services/fetchSwapi";
import { IPerson } from "../types/Person";
import { IStarship } from "../types/Starship";
import PersonCard from "./PersonCard";

import './StarshipCard.scss';

type StarshipType = {
  starship: IStarship;
};

const StarshipCard = ({ starship }: StarshipType) => {
  const [pilotUrl, setPilotUrl] = useState<string | null>(null);
  const [pilot, setPilot] = useState<IPerson | null>(null);

  const handleClick = (url: string) => {
    setPilotUrl(url);
  };

 useEffect(() => {
    if (pilotUrl) {
        fetchPerson(pilotUrl).then((res) => setPilot(res));
      }
 
   return () => {
     setPilotUrl(null);
   }
 }, [pilotUrl])
 

  return (
    <div className="starship">
      <div>{starship.name}</div>
      <div>{starship.model}</div>
      <section>
        {starship.pilots.map((pilotUrl, i) => (
          <button onClick={() => handleClick(pilotUrl)} key={`${pilotUrl}${i}`}>
            show pilot {i + 1}
          </button>
        ))}
        
        {pilot && <PersonCard person={pilot} />}
      </section>
    </div>
  );
};

export default StarshipCard;