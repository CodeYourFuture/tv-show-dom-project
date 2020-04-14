//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const displayElem = document.getElementById("episodesDisplay");
  displayElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
