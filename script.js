import {handleSearch, getEpisodeCode, handleEpisodeSelection} from './helpers.js'


function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
    const rootElem = document.getElementById("root");
    createHeader(rootElem)


    const mainElem = document.createElement("main");
    rootElem.appendChild(mainElem);

    createNav(rootElem, episodeList)
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

function createHeader(parentElem) {
    const headerElem = document.createElement("header");
    headerElem.classList.add("banner")
    headerElem.textContent = "My Episode List";
    parentElem.appendChild(headerElem);
}

function createNav(parentElem, episodeList) {
    const navElem = document.createElement("nav");
    navElem.classList.add("nav-Banner");

    // Create the selector section
    const selectorDiv = document.createElement("div");
    selectorDiv.classList.add("selector");

    // search bar
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search episodes";
    searchInput.addEventListener("input", handleSearch);
    selectorDiv.appendChild(searchInput);
    

    const selectInput = document.createElement("select");
    selectInput.addEventListener("change", handleEpisodeSelection);
    selectorDiv.appendChild(selectInput);

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Jump to an episode";
    selectInput.appendChild(defaultOption);

    episodeList.forEach((episode, index) => {
        const option = document.createElement("option");
        const episodeCode = getEpisodeCode(episode.season, episode.number);
        option.textContent = `${episodeCode} - ${
            episode.name
        }`;
        option.value = index;
        selectInput.appendChild(option);
    });

    // Show "Show all episodes" button
    const showAllButton = document.createElement("button");
    showAllButton.textContent = "Show all episodes";
    showAllButton.addEventListener("click", () => {
        document.querySelectorAll(".episode-container").forEach((container) => {
            container.style.display = "block";
        });
    });
    selectorDiv.appendChild(showAllButton);

    navElem.appendChild(selectorDiv);
    parentElem.appendChild(navElem);
}


function createFooter(parentElem) {
    const footerElem = document.createElement("footer");
    footerElem.textContent = " 2023 My Website";
    parentElem.appendChild(footerElem);
}

window.onload = setup;
