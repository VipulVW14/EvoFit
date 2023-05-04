
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'da88985f35msh1f76588e890406bp1139bbjsn7bf9115f9111',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  
  export const youtubeOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':  'da88985f35msh1f76588e890406bp1139bbjsn7bf9115f9111',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }; 
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };