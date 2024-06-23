import { ICompany } from "./ICompany";

export interface ICompanies {
  etag: string;
  top_hit: ICompany;
  kind: string;
  items?: ICompany[];
  hits?: number;
}
