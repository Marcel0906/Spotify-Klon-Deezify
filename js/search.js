import { populateSongList } from "./player.js";
// import { newGenres } from './genre.js'; we tried to import the genreData, but it doesn´t work with the searchbar  
const searchInput1 = document.getElementById("searchInput1");
const button1 = document.getElementById("searchButton");

const newSearch1 = async (query) => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5f5667f7dcmsh8351307edd4790ep1905e8jsn2f800572c9df",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const searchResultsDiv = document.getElementById("searchResults2");
// newGenres(); only open the genreData in the console
async function handleClick(e) {
  e.preventDefault();
  let query2 = searchInput1.value;
  console.log(query2);
  const result = await newSearch1(query2);
  console.log(result);
  displaySearchResults(result);
  populateSongList(result);
}

button1.addEventListener("click", handleClick);

function displaySearchResults(results) {
  searchResultsDiv.innerHTML = "";

  results.data.forEach((item) => {
    const resultItem = document.createElement("div");

    resultItem.innerHTML = `
    <img src="${item.album.cover_medium}" alt="Album Cover" class="album-cover">
    <div class="result-details">
      <p><strong>Artist:</strong> ${item.artist.name}</p>
      <p><strong>Track:</strong> ${item.title}</p>
      <p><strong>Album:</strong> ${item.album.title}</p>
      
    </div>
  `;

    searchResultsDiv.appendChild(resultItem);
  });
}

const searchInput2 = document.getElementById("searchInput2");
const sendBtn = document.getElementById("send");
const resetBtn = document.getElementById("reset");

const cleanForm = () => {
  searchInput2.value = "";
};

const displayTrack = () => {
  let headings = `
      <tr>
      <th>Artist Name</th>
      <th>Track Name</th>
      <th>Genre</th>
      </tr>
      `;
  if (localStorage.getItem("musicList") !== null) {
    const rechange = JSON.parse(localStorage.getItem("musicList"));
    rechange.forEach((music) => {
      headings += `
              <tr>
              <td>${music.searchInput}</td>
              <td>${music.searchInput}</td>
              <td></td>
              </tr>
              `;
    });
  }
  return (document.querySelector("table").innerHTML = headings);
};
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newMusic = {
    searchInput: searchInput2.value,
  };
  // console.log(newMusic);
  const arrayOfValues = Object.values(newMusic);
  if (!arrayOfValues.includes("")) {
    if (localStorage.getItem("musicList") === null) {
      localStorage.setItem("musicList", "[]");
    }
    const oldMusic = JSON.parse(localStorage.getItem("musicList"));
    oldMusic.push(newMusic);
    localStorage.setItem("musicList", JSON.stringify(oldMusic));
    cleanForm();
    displayTrack();
  }
});
window.addEventListener("load", displayTrack);
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("musicList");
  displayTrack();
});
