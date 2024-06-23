import { ResponseType } from "axios";
import { ApiResponseEncodingEnum, ApiRestMethodEnum } from "../../../config";

export interface IGetCompaniesSearchConfigInput {
  apiKey: string;
  searchArea: string;
  apiRestMethod?: ApiRestMethodEnum;
  apiResponseEncoding?: ApiResponseEncodingEnum;
  apiResponseType?: ResponseType;
  checkUrlValid?: boolean;
  startIndex?: number;
  url?: string;
}
