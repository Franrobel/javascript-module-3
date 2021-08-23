const renderEpisodesList = (episodes) => {
    episodes.results.forEach( (elem, index) => {
        let listElem = document.createElement("li");
        listElem.classList.add(`episode-${index++}`);
        document.querySelector(".list-group").appendChild(listElem)
        listElem.style.listStyle = "none"
        listElem.style.textAlign = "center"
        listElem.style.margin = "2px 5px 2px 5px"
        listElem.innerHTML =`<button class="btn btn-success">Episode ${elem.id}</button>`
        console.log(elem)
        console.log(index)

    });
}

const getRicMortyEpisodes = async () => {
    const url = "https://rickandmortyapi.com/api/episode"
    const fetchUrl = await fetch(url);
    const toJS = await fetchUrl.json();
    renderEpisodesList(toJS)
} 
getRicMortyEpisodes()