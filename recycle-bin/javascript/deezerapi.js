const url = "https://deezerdevs-deezer.p.rapidapi.com/infos";
const options = {
  method: "GET",
  // headers: {
  // 	'X-RapidAPI-Key': 'c2b46f0abemsh89395de9518b15ap14d257jsnb83178df9de6',
  // 	'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  // }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
