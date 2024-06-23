import axios from "axios";
import {
  IGetCompaniesFromStartingIndex,
  IGetCompaniesFromStartingIndexInput,
  IGetCompaniesFromStartingIndexOutput,
} from "../../interfaces";

export const getCompaniesFromStartingIndex: IGetCompaniesFromStartingIndex = async ({
  config,
}: IGetCompaniesFromStartingIndexInput): Promise<IGetCompaniesFromStartingIndexOutput> => {
  return await axios
    .request(config)
    .then((response) => {
      return ["1"];
    })
    .catch((error) => {
      return ["2"];
    });
};
