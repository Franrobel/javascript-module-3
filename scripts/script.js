const getSingleCharacter = () => {
        const characterCard = document.createElement("div");
        //const c
        divEpisode.appendChild(characterCard)
}

const getCharacters = (arrayCharacters) => {
     // try se usa para todo lo que hara la funcion si todo esta bien en los inputs 
    arrayCharacters.forEach( async urlCharacter=>{
      try {  
        const url = urlCharacter;
        const response = await fetch(url)
        const parsedRes = await response.json() // en parsedRes convertimos response (que es obj json) a un obt JS asi podemos aplicar metodos de JS
        console.log(arrayCharacters)
       // getSingleCharacter(parsedRes)
        console.log(url);
        } catch (e){
            console.log(e)
    } 
    
 })
console.log(arrayCharacters)}

   
const rightSide = document.querySelector("#right-side");
const divEpisode = document.createElement("div")
divEpisode.classList.add("date-season-episode")

const getEpisodeCard = (episode)=>{
       rightSide.appendChild(divEpisode)
       divEpisode.innerHTML = `<h2>Episode ${episode.id}</h2> <h6>${episode.air_date} | ${episode.episode}</h6>`;
        console.log(episode.characters)//HASTA ACA ESTOY ACCEDIENDO AL ARRAY CON LAS URLS DE LOS CHARACTERS
    }
const getSingleEpisode = async (id) => {
    try {   // try se usa para todo lo que hara la funcion si todo esta bien en los inputs 
        const url = `https://rickandmortyapi.com/api/episode/${id}`
        const response = await fetch(url)
        const parsedRes = await response.json() // en parsedRes convertimos response (que es obj json) a un obt JS asi podemos aplicar metodos de JS
        clearContent()
        getEpisodeCard(parsedRes)   

    }
   catch (e){
   } 
}

const renderEpisodesList = (episodes) => {
    episodes.toJS2.results.forEach( (elem, index) => {
        console.log(episodes.toJS1.results)
        let listElem = document.createElement("li");
        listElem.classList.add(`episode-${index++}`);
        document.querySelector(".list-group").appendChild(listElem)
        listElem.style.listStyle = "none"
        listElem.style.textAlign = "center"
        listElem.style.margin = "2px 5px 2px 5px"
        listElem.innerHTML =`<a href="#" class="btn-link">Episode ${elem.id}</a>`;
        listElem.onclick = () => {  
            getSingleEpisode(elem.id)

             }


    });
//NECESITO HACE SLICE PARA QUE ME MUESTRE LOS 10 PRIMEROS EPISODIOS, DESPUES, PARA
//LOS OTROS 10 ACCEDE MEDIANTE UN BOTON QUE DIGA "VIEW ALL EPISODES"
}
const clearContent = () =>{
    document.querySelector("#right-side").innerHTML= "";
}

const getRicMortyEpisodes = async () => {
    const url1 = "https://rickandmortyapi.com/api/episode?page=1"
    const fetchUrl1 = await fetch(url1);
    const toJS1 = await fetchUrl1.json();
    const url2 = "https://rickandmortyapi.com/api/episode?page=2"
    const fetchUrl2 = await fetch(url2);
    const toJS2 = await fetchUrl2.json();
    const url3 = "https://rickandmortyapi.com/api/episode?page=3"
    const fetchUrl3 = await fetch(url3);
    const toJS3 = await fetchUrl3.json();
    const allPagesJS = {toJS1, toJS2, toJS3}; 
    renderEpisodesList(allPagesJS)

} 
getRicMortyEpisodes();