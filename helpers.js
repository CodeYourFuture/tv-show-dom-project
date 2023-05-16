export function handleSearch() {
    const searchTerm = this.value.trim().toLowerCase();
    const episodes = document.getElementsByClassName("episode-container");
  
    let matchedCount = 0;
  
    for (const episode of episodes) {
      const episodeName = episode.querySelector("h2").textContent.toLowerCase();
      const episodeSummary = episode.querySelector("p").textContent.toLowerCase();
  
      if (episodeName.includes(searchTerm) || episodeSummary.includes(searchTerm)) {
        episode.style.display = "block";
        matchedCount++;
      } else {
        episode.style.display = "none";
      }
    }
  
    updateMatchedCount(matchedCount);
  }

  export function updateMatchedCount(count) {
    const countElem = document.querySelector(".matched-count");
    
    // Create the matched count element if it doesn't exist
    if (!countElem) {
      const parentElem = document.querySelector("main");
      const newCountElem = document.createElement("p");
      newCountElem.classList.add("matched-count");
      parentElem.insertBefore(newCountElem, parentElem.firstChild);
      countElem = newCountElem;
    }
    
    countElem.textContent = `Displaying ${count} episode(s)`;
  }

  export function getEpisodeCode(season, episode) {
    const seasonCode = String(season).padStart(2, "0");
    const episodeCode = String(episode).padStart(2, "0");
    return `S${seasonCode}E${episodeCode}`;
  }


 export function handleEpisodeSelection(event) {
    const selectedIndex = event.target.value;

      document.querySelectorAll(".episode-container").forEach((container, index) => {
      if (index === Number(selectedIndex)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    })
  }
