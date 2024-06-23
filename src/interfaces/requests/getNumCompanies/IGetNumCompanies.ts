import { IGetNumCompaniesInput } from "./IGetNumCompaniesInput";
import { IGetNumCompaniesOutput } from "./IGetNumCompaniesOutput";

export type IGetNumCompanies = ({}: IGetNumCompaniesInput) => Promise<IGetNumCompaniesOutput>;
