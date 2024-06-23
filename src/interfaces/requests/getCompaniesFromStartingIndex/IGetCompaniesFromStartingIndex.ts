import { IGetCompaniesFromStartingIndexInput } from "./IGetCompaniesFromStartingIndexInput";
import { IGetCompaniesFromStartingIndexOutput } from "./IGetCompaniesFromStartingIndexOutput";

export type IGetCompaniesFromStartingIndex =
  ({}: IGetCompaniesFromStartingIndexInput) => Promise<IGetCompaniesFromStartingIndexOutput>;
