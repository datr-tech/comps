import axios from "axios";
import { IGetNumCompanies, IGetNumCompaniesInput, IGetNumCompaniesOutput } from "../../interfaces";

export const getNumCompanies: IGetNumCompanies = async ({
  config,
}: IGetNumCompaniesInput): Promise<IGetNumCompaniesOutput> => {
  return await axios
    .request(config)
    .then((response) => {
      return 0;
    })
    .catch((error) => {
      return 1;
    });
};
