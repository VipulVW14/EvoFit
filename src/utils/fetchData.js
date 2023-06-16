
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af47600b1fmsh88125bd99fe0415p15eefajsnec5706c4d4f8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  
  export const youtubeOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af47600b1fmsh88125bd99fe0415p15eefajsnec5706c4d4f8',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }; 
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };