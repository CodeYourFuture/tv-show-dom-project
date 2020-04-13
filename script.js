//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  document.getElementById("episodesDisplay").textContent =
    "Show your episodes here!";
}

window.onload = setup;
