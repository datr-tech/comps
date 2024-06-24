import { getCompaniesSearchConfig } from "../helpers";
import { getCompaniesFromStartIndex } from "./getCompaniesFromStartIndex";
import { getNumCompanies } from "./getNumCompanies";
import { ICompany, IGetCompanies, IGetCompaniesInput, IGetCompaniesSearchConfigOutput } from "../../interfaces";
import { CONST_COMPANIES_API_INDEX_STEP } from "../../config";

/**
 * Retrieve company details for a specified searchArea.
 *
 * @param {IGetCompaniesInput} params
 * @param {string} params.apiKey
 * @param {string} params.searchArea
 * @param {number} params.step
 * @return {Promise<ICompany[]>}
 *
 * @example
 *   // Retrieve details using the default step value
 *   const companies: ICompany[] = getCompanies({ apiKey, searchArea });
 *
 * @example
 *   // Retrieve details with an explicit step value
 *   const companies: ICompany[] = getCompanies({ apiKey, searchArea, step });
 */
export const getCompanies: IGetCompanies = async ({
  apiKey,
  searchArea,
  step = CONST_COMPANIES_API_INDEX_STEP,
}: IGetCompaniesInput): Promise<ICompany[]> => {
  /*
   * Define a string variable that will be used as a prefix for
   * each thrown error message. The string will uniquely define the
   * 'location' of the current code module, aiding debugging.
   */
  const errorPrefix: string = "main.requests.getCompanies";

  try {
    /*
     * Use 'getCompaniesSearchConfig' to both validate the
     * received params and (following a successful validation)
     * generate the config for the company related API calls.
     */
    const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig({
      apiKey,
      searchArea,
    });

    /*
     * Relative to the value of the received 'searchArea', find the
     * total number of companies whose information should be downloaded
     * (in batches of CONST_COMPANIES_API_INDEX_STEP).
     */
    const numCompanies: number = await getNumCompanies({ config });
    let output: ICompany[] = [];

    /*
     * Iterate company records from 1 to 'numCompanies' in 'step' batches.
     */
    for (let index: number = 1; index < numCompanies; index = index + step) {
      config.params["start_index"] = index;

      const outputCurrent: ICompany[] = await getCompaniesFromStartIndex({ config });
      output = output.concat(outputCurrent);
    }

    return output;
  } catch (error) {
    throw new Error(`${errorPrefix}: ${error.message}`);
  }
};
