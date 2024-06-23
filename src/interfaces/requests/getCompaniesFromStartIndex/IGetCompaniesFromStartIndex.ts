import { IGetCompaniesFromStartIndexInput } from "./IGetCompaniesFromStartIndexInput";
import { IGetCompaniesFromStartIndexOutput } from "./IGetCompaniesFromStartIndexOutput";

export type IGetCompaniesFromStartIndex =
  ({}: IGetCompaniesFromStartIndexInput) => Promise<IGetCompaniesFromStartIndexOutput>;
