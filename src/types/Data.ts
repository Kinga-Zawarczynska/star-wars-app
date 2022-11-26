import { PEOPLE, STARSHIPS } from "../contants";
import { IPerson } from "./Person";
import { IPLanet } from "./Planet";
import { IStarship } from "./Starship";

type peopleResults = {
  count: number | null;
  next: string | null;
  results: IPerson[];
};

type starshipsResults = {
  count: number | null;
  next: string | null;
  results: IStarship[];
};

type planetsResults = {
  count: number | null;
  next: string | null;
  results: IPLanet[]
};

export interface IData {
  people: peopleResults;
  starships: starshipsResults;
  planets: planetsResults;
}
