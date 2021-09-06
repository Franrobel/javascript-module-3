

    const rightSide = document.querySelector("#right-side");
    const divEpisode = document.createElement("div")
    divEpisode.classList.add("date-season-episode", "container-fluid")
    const divContainCharac = document.createElement('div');
    divContainCharac.classList.add("characters-conatiner", "row", "cols-4", "container-fluid")
   
    const mainCharacterDiv = document.createElement("div");
            mainCharacterDiv.id = "main-character-container";
            mainCharacterDiv.classList.add("container-fluid")
/* const eachCharacterCard = (characObj) =>{
    rightSide.appendChild(character) 
    //console.log(characObj.episode)
    const characImage = document.createElement("img")
    characImage.setAttribute('src', `${characObj.image}`);
    // console.log(characObj)
 }*/

const fetchInfo = async (url) =>{
    const response = await fetch(url)
    const info = await response.json()
    return info
} 

  const renderCharacactresCards = async (urlCharacters)=> {
   const response = await fetch(urlCharacters)// const characObj = fetchInfo(urlCharacters)
   const characObj = await response.json()
   //console.log(characObj.episode)   
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
    //console.log(characObj.image)
    characImage.setAttribute('alt', `${characObj.name}`); 
    characImage.classList.add("card-img-top", "py-2");
    cards.appendChild(characImage)
    const cardBody = document.createElement("div")
    cardBody.innerHTML = `<div class="card-body px-0"><h4 class="card-title">${characObj.name}</h4> <h5>${characObj.species} | ${characObj.status}</h5> </div>`
    cards.appendChild(cardBody)
    
    cards.onclick = () => {
        mainCharacterDiv.innerHTML=""
        document.querySelectorAll(".date-season-episode").forEach((element) => {
            element.parentElement.removeChild(element);
        })

        document.querySelectorAll(".characters-conatiner").forEach((element) => {
            element.parentElement.removeChild(element);
        })

            rightSide.appendChild(mainCharacterDiv);
           
            const imageInfoContainer = document.createElement("div");
            imageInfoContainer.classList.add("row", "character-total-info");

            mainCharacterDiv.appendChild(imageInfoContainer);
            const divImage = document.createElement("div");
            divImage.id = "div-image";
            divImage.classList.add("col-4");
            imageInfoContainer.appendChild(divImage)
            const characImag = document.createElement("img");
            characImag.style.width = "250px";
            characImag.setAttribute('src', `${characObj.image}`);
            divImage.appendChild(characImag); 
            const characterInfoDiv = document.createElement("div");
            imageInfoContainer.appendChild(characterInfoDiv)
            characterInfoDiv.id = "character-info"
            characterInfoDiv.classList.add("col-8", "py-4")
            characterInfoDiv.innerHTML = `<h2>${characObj.name}</h2><h5>${characObj.gender} | ${characObj.status} | ${characObj.species} | ${characObj.origin.name}</h5>`
            const buttonLoc = document.createElement("button");
            buttonLoc.classList.add("btn", "btn-danger")
            buttonLoc.innerHTML = "LOCATIONS";
            characterInfoDiv.appendChild(buttonLoc)
            const line = document.createElement("hr")
           mainCharacterDiv.appendChild(line);
           const characterAppearances = document.createElement("div");
           characterAppearances.classList.add("character-appearances", "row");
           mainCharacterDiv.appendChild(characterAppearances)
           console.log(characObj);
         characObj.episode.forEach(async (url)=>{
            const response = await fetch(url)
            const data = await response.json()
            
            const showEpisodesCharacter = document.createElement('a')
             characterAppearances.appendChild(showEpisodesCharacter)
             showEpisodesCharacter.classList.add(`episode-${data.id}`, "col-4", "p-3", "text-center")
             showEpisodesCharacter.innerHTML = `<h4>Episode ${data.id}</h4> <h6>${data.episode}</h6>`
             console.log(characObj.location)
         })
         document.querySelector(".btn-danger").onclick = () => {
            mainCharacterDiv.innerHTML =""
            const locationCharac = document.createElement("div")
            locationCharac.innerHTML= `${characObj.location.name}`
            mainCharacterDiv.appendChild(locationCharac)
            rightSide.appendChild(mainCharacterDiv)

                
            }

        
            // eachCharacterCard(characObj)// const getEachCharacInfo = ()=> (elem) 
}
  }

  
const getSingleEpisode = (episode) => {
    //console.log(episode)
    rightSide.appendChild(divEpisode)
    //const charactersEpisode = document.createElement("div");
    divEpisode.innerHTML = `<h2>${episode.name}</h2> <h6>${episode.air_date} | ${episode.episode}</h6>`;
    //charactersEpisode.classList.add("characters-list", "row")
   // divEpisode.appendChild(charactersEpisode)
    episode.characters.forEach( urlCharacters => {
        renderCharacactresCards(urlCharacters);
       // console.log(urlCharacters);

})}

const renderEpisodesList = (episodes, i) => {
   // console.log(episodes)
    //console.log(i)
    const until10Episodes = episodes.slice(0, i)
    until10Episodes.forEach( (elem, index) => {
       //console.log(elem)
        let listElem = document.createElement("li");
        listElem.classList.add(`episode-${index++}`);
        listElem.id = "episodes-list"
        document.querySelector(".list-group").appendChild(listElem)
        listElem.style.listStyle = "none"
        listElem.style.textAlign = "center"
        listElem.style.margin = "2px 5px 2px 5px"
        listElem.innerHTML =`<a href="#" class="btn-link">Episode ${elem.id}</a>`;
        listElem.onclick = () => {
            document.querySelectorAll("#main-character-container").forEach((element) => {
                element.parentElement.removeChild(element); })
            //console.log(document.querySelectorAll(".characters-list"))
            document.querySelectorAll(".characters-list").forEach((element) => {
                element.parentElement.removeChild(element); 
                mainCharacterDiv.innerHTML=""

            } )
           
            mainCharacterDiv.remove()
            getSingleEpisode(elem) //ESTABA HACIENDO EL ELEM.ID Y ERA SOLO ELEM (QUE ME DA EL OBJECTO)
//console.log(elem.id) // SOLO EL NUMERO DEL EPISODIO QUE ESTABA PIDIENDO
//console.log(elem)
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
        mainCharacterDiv.innerHTML=""
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
       //console.log(element)
        element.parentElement.removeChild(element)
    })

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
  //  console.log(toJS1)
   // const allPage = toJS1.results + toJS2.results + toJS3.results
    const allPages = toJS1.results.concat(toJS2.results).concat(toJS3.results)
   renderEpisodesList(allPages, numOfEpisodes)
  //console.log(allPages)
   //getEpisodeCard(allPages)
} 
getRicMortyEpisodes(10);

