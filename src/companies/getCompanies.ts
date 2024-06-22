import axios from 'axios';

const companiesHouseApiKey = process.env.COMPANIES_HOUSE_API_KEY;
const urlCompanies = process.env.URL_COMPANIES;

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `${urlCompanies}?location=Edinburgh`,
  headers: {
    'Authorization': `${companiesHouseApiKey}`
  }
};

export const getCompanies = async () => {
  await axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
