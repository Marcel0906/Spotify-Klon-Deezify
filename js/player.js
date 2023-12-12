const audioPlayer = document.getElementById("audioPlayer");
const songList = document.getElementById("songList");

let isPlaying = false;

songList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LI") {
    const songSrc = target.getAttribute("data-src");
    audioPlayer.src = songSrc;
    audioPlayer.play();
    isPlaying = true;
  }
});

export function populateSongList(results) {
  const songs = results.data;
  const listItems = songs.map((song) => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title;
    listItem.setAttribute("data-src", song.preview);
    return listItem;
  });

  songList.innerHTML = "";
  listItems.forEach((item) => {
    songList.appendChild(item);
  });
}
