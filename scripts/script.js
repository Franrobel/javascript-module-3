const renderEpisodesList = (episode) => {
    episode.results.forEach( (i, index) => {
        let listElem = document.createElement("li");
        listElem.classList.add(`episode-${episode.results[i++]}`);
        listElem.style.listStyle = "none"
        listElem.innerHTML =`<button>Episode ${episode.results[i]}</button>`
        document.querySelector("#episodes-list").appendChild(listElem)
console.log(i);
        
    });
}

const getRicMortyEpisodes = async () => {
    const url = "https://rickandmortyapi.com/api/episode"
    const fetchUrl = await fetch(url);
    const toJS = await fetchUrl.json();
    renderEpisodesList(toJS)
    console.log(toJS)
} 
getRicMortyEpisodes()