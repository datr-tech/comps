import { IGetCompaniesInput } from "./IGetCompaniesInput";
import { IGetCompaniesOutput } from "./IGetCompaniesOutput";

export type IGetCompanies = ({}: IGetCompaniesInput) => Promise<IGetCompaniesOutput>;
