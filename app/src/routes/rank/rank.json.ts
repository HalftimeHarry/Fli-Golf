// rank.json.ts
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://current-disc-golf-world-rankings.p.rapidapi.com/dgpt-rankings-men',
  headers: {
    'X-RapidAPI-Key': '179101bf15mshb938e4787ea50e9p1517b1jsn273c46ad4266',
    'X-RapidAPI-Host': 'current-disc-golf-world-rankings.p.rapidapi.com'
  }
};

export async function fetchRankings() {
  try {
    const response = await axios.request(options);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error
  }
}
