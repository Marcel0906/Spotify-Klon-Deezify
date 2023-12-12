const newEditorial = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/editorial/%7Bid%7D";
  const options = {
    method: "GET",
    // headers: {
    //   "X-RapidAPI-Key": "5f5667f7dcmsh8351307edd4790ep1905e8jsn2f800572c9df",
    //   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    // },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
export { newEditorial };

(async () => {
  await newEditorial();
})();
