import axios from 'axios';

export const report = async (data) => {
  await axios.post(`https://goodnewsapi.up.railway.app/save?title=${data}`);
};
