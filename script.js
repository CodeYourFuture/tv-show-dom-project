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
  allSeasonDiv(rootElem, episodeList)
  createFooter(rootElem)
}

function allSeasonDiv(parentElem, episodeList){

  const seasonContainer = document.createElement("div")
  const seasonContainerHeader = document.createElement("h1")
  const seasonContainerImage = document.createElement("img")
  seasonContainerHeader.textContent = episodeList[0].name
  seasonContainerImage.src = episodeList[0].image.medium

  seasonContainer.appendChild(seasonContainerHeader )
  seasonContainer.appendChild(seasonContainerImage )
  parentElem.appendChild(seasonContainer)
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
