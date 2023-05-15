function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  createHeader(rootElem)


  const mainElem = document.createElement("main");
  mainElem.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.appendChild(mainElem);

  createNav(rootElem)
  allEpisodesDiv(rootElem, episodeList)
  createFooter(rootElem)
}

function allEpisodesDiv(parentElem, episodeList) {
  const episodesContainer = document.createElement("div");
  episodesContainer.classList.add("episode-Container-MainDiv");

  episodeList.forEach((episode) => {
    const episodeContainer = document.createElement("div");
    episodeContainer.classList.add("episode-container");

    const episodeCode = getEpisodeCode(episode.season, episode.number);

    const episodeCodeElem = document.createElement("p");
    episodeCodeElem.textContent = episodeCode;
    episodeContainer.appendChild(episodeCodeElem);

    const episodeNameElem = document.createElement("h2");
    episodeNameElem.textContent = episode.name;
    episodeContainer.appendChild(episodeNameElem);

    const episodeImageElem = document.createElement("img");
    episodeImageElem.src = episode.image.medium;
    episodeImageElem.alt = episode.name;
    episodeContainer.appendChild(episodeImageElem);

    const episodeSummaryElem = document.createElement("p");
    episodeSummaryElem.innerHTML = episode.summary;
    episodeContainer.appendChild(episodeSummaryElem);

    const episodeLinkElem = document.createElement("a");
    episodeLinkElem.href = episode.url;
    episodeLinkElem.textContent = "More info on TVMaze.com";
    episodeContainer.appendChild(episodeLinkElem);

    episodesContainer.appendChild(episodeContainer);
  });

  parentElem.appendChild(episodesContainer);
}

function getEpisodeCode(season, episode) {
  const seasonCode = String(season).padStart(2, "0");
  const episodeCode = String(episode).padStart(2, "0");
  return `S${seasonCode}E${episodeCode}`;
}


function createHeader(parentElem){
  const headerElem = document.createElement("header");
  headerElem.classList.add("banner")
  headerElem.textContent = "My Episode List"; // Replace with your desired header content
  parentElem.appendChild(headerElem);
}

function createNav(parentElem) {
  const navElem = document.createElement("nav");
  navElem.classList.add("nav-Banner");

  // Create the selector section
  const selectorDiv = document.createElement("div");
  selectorDiv.classList.add("selector");

  // Create the select button
  const selectButton = document.createElement("select");
  selectButton.textContent = "Select a Show";

  const seasonButton = document.createElement("select");
  seasonButton.textContent = "Select a season";


  // Create the default option
  const defaultOptionForSelect = document.createElement("option");
  defaultOptionForSelect.textContent = "Choose a show";
  selectButton.appendChild(defaultOptionForSelect);

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Choose a season";
  seasonButton.appendChild(defaultOption);
  
  // Create the show options
  // const show1Option = document.createElement("option");
  // show1Option.textContent = "Show 1";
  // selectButton.appendChild(show1Option)



  // Append the select button to the selector section
  selectorDiv.appendChild(selectButton);
  selectorDiv.appendChild(seasonButton);
  // Append the selector section to the navigation
  navElem.appendChild(selectorDiv);

  // Append the navigation to the parent element
  parentElem.appendChild(navElem);
}


function createFooter(parentElem){
  const footerElem = document.createElement("footer");
  footerElem.textContent = "© 2023 My Website"; // Replace with your desired footer content
  parentElem.appendChild(footerElem);
}

window.onload = setup;
