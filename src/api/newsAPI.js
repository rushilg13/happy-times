import axios from 'axios';

const baseURL = `https://goodnewsapi.up.railway.app`;
let newsData;

export const newsAPI = async (category, country) => {
    if (category === undefined) {
        await axios.get(`${baseURL}/all/all`).then(res => {
            newsData = res.data;
        })
    } else {
        let countrySelected;
        switch (country) {
            case 'India':
                countrySelected = 'in'
                break;
            case 'Australia':
                countrySelected = 'au'
                break;
            case 'Russia':
                countrySelected = 'ru'
                break;
            case 'USA':
                countrySelected = 'us'
                break;
            case 'United Kingdom':
                countrySelected = 'gb'
                break;
            case 'France':
                countrySelected = 'fr'
                break;
            default:
                countrySelected = 'in'
                break;
        }

        await axios.get(`${baseURL}/${category}/${countrySelected}`).then(res => {
            newsData = res.data;
        })
    }
    return newsData;
}
