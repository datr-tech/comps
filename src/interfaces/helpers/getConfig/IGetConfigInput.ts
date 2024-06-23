import { ApiRestMethodEnum } from "../../../consts";

export interface IGetConfigInput {
  apiKey: string;
  searchArea: string;
  apiRestMethod?: ApiRestMethodEnum;
  baseApiUrl?: string;
  checkUrlValid?: boolean;
  startingIndex?: number;
}
