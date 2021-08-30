

/*const getCharacters =  async () => {
    //console.log(arrayCharacters)
     // try se usa para todo lo que hara la funcion si todo esta bien en los inputs 
      try {  
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(url)
        const parsedRes = await response.json() // en parsedRes convertimos response (que es obj json) a un obt JS asi podemos aplicar metodos de JS
        getEachCaracter(parsedRes)
        } catch (e){
            console.log(e)
    } 
 }*/
/*const getEpisodeCard = (episode) => {
    console.log(episode)
    rightSide.appendChild(divEpisode)
    divEpisode.innerHTML = `<h2>${episode.name}</h2> <h6>${episode.air_date} | ${episode.episode}</h6>`;
    console.log(episode.characters)
    const charactersEpisode = document.createElement("div");
    charactersEpisode.classList.add("characters-list", "row")
    divEpisode.appendChild(charactersEpisode)

    
    const cards = document.createElement("div");
    cards.classList.add("card", "character", "m-4");
    cards.style.width = "15rem";
    charactersEpisode.appendChild(cards)
    const characImage = document.createElement("img")
    characImage.setAttribute('src', "./images/2 (1).jpeg");
    characImage.setAttribute('alt', `na`); 
    characImage.classList.add("card-img-top", "py-2");
    cards.appendChild(characImage)
    const cardBody = document.createElement("div")
    cardBody.innerHTML = `<div class="card-body px-0"><h5 class="card-title">${elem.index} | elem.status"</h5> </div>`
    cards.appendChild(cardBody)
    }*/
    const rightSide = document.querySelector("#right-side");
const divEpisode = document.createElement("div")
divEpisode.classList.add("date-season-episode", "container-fluid")

  const divContainCharac = document.createElement('div');
  divContainCharac.classList.add("characters-conatiner", "row", "cols-4", "container-fluid")
  const EachCharacter =  () => {
  }
  const renderCharacactresCards = async (urlCharacters)=> {
    const response = await fetch(urlCharacters);
    console.log(urlCharacters)
    const characObj = await response.json();
    console.log(characObj)
    rightSide.appendChild(divContainCharac)
    const charactersEpisode = document.createElement("div");
    charactersEpisode.classList.add("characters-list", "col")
    divContainCharac.appendChild(charactersEpisode)
    const cards = document.createElement("div");
    cards.classList.add("card", "character", "m-4");
    cards.style.width = "15rem";
    charactersEpisode.appendChild(cards)
    const characImage = document.createElement("img")
    characImage.setAttribute('src', `${characObj.image}`);
    characImage.setAttribute('alt', `${characObj.name}`); 
    characImage.classList.add("card-img-top", "py-2");
    cards.appendChild(characImage)
    const cardBody = document.createElement("div")
    cardBody.innerHTML = `<div class="card-body px-0"><h4 class="card-title">${characObj.name}</h4> <h5>${characObj.species} | ${characObj.status}</h5> </div>`
    cards.appendChild(cardBody)
    
  }
const getSingleEpisode = (episode) => {
    rightSide.appendChild(divEpisode)
    //const charactersEpisode = document.createElement("div");
    divEpisode.innerHTML = `<h2>${episode.name}</h2> <h6>${episode.air_date} | ${episode.episode}</h6>`;
    //charactersEpisode.classList.add("characters-list", "row")
   // divEpisode.appendChild(charactersEpisode)
    episode.characters.forEach( urlCharacters=>{
        renderCharacactresCards(urlCharacters);
    })

}

const renderEpisodesList = (episodes, i) => {
    const until10Episodes = episodes.slice(0, i)
    until10Episodes.forEach( (elem, index) => {
        let listElem = document.createElement("li");
        listElem.classList.add(`episode-${index++}`);
        listElem.id = "episodes-list"
        document.querySelector(".list-group").appendChild(listElem)
        listElem.style.listStyle = "none"
        listElem.style.textAlign = "center"
        listElem.style.margin = "2px 5px 2px 5px"
        listElem.innerHTML =`<a href="#" class="btn-link">Episode ${elem.id}</a>`;
        listElem.onclick = () => {  
            getSingleEpisode(elem) //ESTABA HACIENDO EL ELEM.ID Y ERA SOLO ELEM (QUE ME DA EL OBJECTO)
console.log(elem.id) // SOLO EL NUMERO DEL EPISODIO QUE ESTABA PIDIENDO
console.log(elem)

             }
    });
    const allEpisodesBtn = document.createElement('button');
    allEpisodesBtn.classList.add("btn", "btn-success");
    allEpisodesBtn.id= "more-episodes-btn";
    allEpisodesBtn.innerHTML = "View More Episodes";
    document.querySelector(".list-group").appendChild(allEpisodesBtn)
    
    document.querySelector("#more-episodes-btn").addEventListener('click', (e) => {
        e.preventDefault()
        clearContent()
        getRicMortyEpisodes(41)
        
        }
    )  
}
   /*sconst lessEpisodesBtn = document.createElement('button');
    lessEpisodesBtn.classList.add("btn", "btn-success");
    lessEpisodesBtn.id= "less-episodes-btn";
    lessEpisodesBtn.innerHTML = "View Less Episodes";
    document.querySelector(".list-group").appendChild(lessEpisodesBtn) 
    document.querySelector("#less-episodes-btn").addEventListener('click', (e) => {
        e.preventDefault()
        clearContent()
        getRicMortyEpisodes(10)
     //NECESITO HACE SLICE PARA QUE ME MUESTRE LOS 10 PRIMEROS EPISODIOS, DESPUES, PARA
//LOS OTROS 10 ACCEDE MEDIANTE UN BOTON QUE DIGA "VIEW ALL EPISODES"
    }
)*/

const clearContent = () =>{
  // document.querySelector("#right-side").innerHTML= "";
    document.querySelectorAll("#episodes-list").forEach((element) => {
        element.parentElement.removeChild(element)
    })

  document.querySelectorAll("characters-list").forEach((element) => element.parentElement.removeChild(element) )
    const button = document.querySelector("#more-episodes-btn")
    button.parentElement.removeChild(button)
}


const getRicMortyEpisodes = async (numOfEpisodes) => {
    const url1 = "https://rickandmortyapi.com/api/episode?page=1"
    const fetchUrl1 = await fetch(url1);
    const toJS1 = await fetchUrl1.json();
    const url2 = "https://rickandmortyapi.com/api/episode?page=2"
    const fetchUrl2 = await fetch(url2);
    const toJS2 = await fetchUrl2.json();
    const url3 = "https://rickandmortyapi.com/api/episode?page=3"
    const fetchUrl3 = await fetch(url3);
    const toJS3 = await fetchUrl3.json();
 
   // const allPage = toJS1.results + toJS2.results + toJS3.results
    const allPages = toJS1.results.concat(toJS2.results).concat(toJS3.results)
   renderEpisodesList(allPages, numOfEpisodes)
   //getEpisodeCard(allPages)
} 
getRicMortyEpisodes(10);

