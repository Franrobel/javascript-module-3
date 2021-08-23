const getEpisodeCard = (episode)=>{
       const rightSide = document.querySelector("#right-side");
       const divEpisode = document.createElement("div")
       rightSide.appendChild(divEpisode)
       divEpisode.innerHTML = `<h1>Episode${episode}</h1>`;
       console.log(episode)
}
const getSingleEpisode = async (id) => {
    try {   // try se usa para todo lo que hara la funcion si todo esta bien en los inputs 
        const url = `https://rickandmortyapi.com/api/episode/${id}`
        const response = await fetch(url)
        const parsedRes = await response.json() // en parsedRes convertimos response (que es obj json) a un obt JS asi podemos aplicar metodos de JS
       // clearContent()
        getEpisodeCard(parsedRes)   
    }
   catch (e){
   } 
}
const renderEpisodesList = (episodes) => {

    episodes.results.forEach( (elem, index) => {
        let listElem = document.createElement("li");
        listElem.classList.add(`episode-${index++}`);
        document.querySelector(".list-group").appendChild(listElem)
        listElem.style.listStyle = "none"
        listElem.style.textAlign = "center"
        listElem.style.margin = "2px 5px 2px 5px"
        listElem.innerHTML =`<a href="#" class="btn-link">Episode ${elem.id}</a>`;
        listElem.onclick = () => {  
            getSingleEpisode(episodes)
             }
             

    });
}

const getRicMortyEpisodes = async () => {
    const url = "https://rickandmortyapi.com/api/episode"
    const fetchUrl = await fetch(url);
    const toJS = await fetchUrl.json();
    renderEpisodesList(toJS)
} 
getRicMortyEpisodes()