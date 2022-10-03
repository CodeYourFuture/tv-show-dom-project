//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  //create container to display all episodes
  const container = document.createElement("div");
  container.classList = "container";
  rootElem.appendChild(container);
  console.log(container.length);

  //display all episodes
  episodeList.forEach((episode) => {
    //create container to display single episode
    const episodeContainer = document.createElement("div");
    episodeContainer.classList = "episode-container";
    container.appendChild(episodeContainer);

    //create episode name
    const episodeName = document.createElement("h2");
    episodeName.classList = "episode-name";
    episodeContainer.appendChild(episodeName);
    episodeName.textContent = episode.name;

    //create season number & episode number container
    const seasonAndEpisodeNumber = document.createElement("div");
    seasonAndEpisodeNumber.className = "season-and-episode-number";
    episodeContainer.appendChild(seasonAndEpisodeNumber);

    //season number
    const seasonNumber = document.createElement("span");
    seasonNumber.classList = "season-number";
    seasonAndEpisodeNumber.appendChild(seasonNumber);
    seasonNumber.textContent = "S" + padNumber(episode.season);

    //episode number
    const episodeNumber = document.createElement("span");
    episodeNumber.classList = "episode-number";
    seasonAndEpisodeNumber.appendChild(episodeNumber);
    episodeNumber.textContent = "E" + padNumber(episode.number);

    function padNumber(num) {
      return num.toString().padStart(2, "0");
    }

    //create image
    const episodeImage = document.createElement("img");
    episodeImage.classList = "episode-image";
    episodeContainer.appendChild(episodeImage);
    episodeImage.src = episode.image.medium;
    episodeImage.alt = "episode-image";

    const episodeSummary = document.createElement("p");
    episodeSummary.classList = "episode-summary";
    episodeContainer.appendChild(episodeSummary);
    episodeSummary.innerHTML = episode.summary;
  });
}

window.onload = setup;
