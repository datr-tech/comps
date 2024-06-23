import { ResponseType } from "axios";
import { IGetCompaniesSearchConfigOutputParams } from "./IGetCompaniesSearchConfigOutputParams";

export type IGetCompaniesSearchConfigOutput = {
  headers: {
    Authorization: string;
  };
  method: string;
  maxBodyLength: typeof Infinity;
  params: IGetCompaniesSearchConfigOutputParams;
  responseEncoding: string,
  responseType: ResponseType,
  url: string;
};
