import { IPLanet } from "../types/Planet";

type PlanetType = {
  planet: IPLanet;
};

const PlanetCard = ({ planet }: PlanetType) => {
  return (
    <>
      <div>NAME: {planet.name}</div>
      <div>POPULATION: {planet.population}</div>
    </>
  );
};

export default PlanetCard;
