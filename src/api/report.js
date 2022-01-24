import axios from 'axios';

export const report = async (data) => {
  await axios.post(`https://goodnewsapi.herokuapp.com/save?title=${data}`);
};
