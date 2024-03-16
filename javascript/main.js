// Als pagina klaar is met laden roep init functie aan
window.addEventListener('load', init);
let detailSidebar;
let sidebarToggled;
let magazineItems = ['benchpress', 'squat', 'deadlift']
let magazineContainer;
let removeFavoriteButton;
let favorites = [];
let url;


console.log('billen');
function init() {
    // Sidebar standaard uitzetten
    sidebarToggled = false;
    url = 'http://localhost/prg3eindoprdacht/webservice/';

    // Haalt de detailsidebar op uit de HTML
    detailSidebar = document.getElementById('detail-sidebar')

    magazineContainer = document.querySelector('.item-container')
    magazineContainer.addEventListener('click', itemClickHandler);

    // de detail knop ophalen


    // de favorite knop ophalen
/*    addToFavoriteButton = document.querySelector('.favorite-button');
    addToFavoriteButton.addEventListener('click', addToFavorite)*/

    ajaxRequest(url, createMagazineItems);


}

function ajaxRequest(url, succesHandler) {
    fetch(url) //fetch haalt vanuit externe webserver info op
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}) : ${response.statusText}`);
            }
            return response.json(); //hiermee zet je het om zodat je browser het kan uitlezen
        })
        .then(succesHandler)
        .catch(ajaxErrorHandler);
}



function ajaxErrorHandler(error){
console.log(error);
}

function itemClickHandler(e){
    let clickedItem = e.target;
    console.log(clickedItem);

    if (clickedItem.classList.contains('details-button')){
        showSidebar();
    }

    if (clickedItem.classList.contains('favorite-button')){
        addToFavorite(clickedItem);
    }

    if (clickedItem.classList.contains('remove-favorite')){
        removeFromFavorite(clickedItem);
    }
}

function createMagazineItems(data){
    console.log(data);
    for (const item of data){

        // Het aanmaken van het vakje die de content gaat bevatten
        let magazineItem = document.createElement('div')
        magazineItem.classList.add('column', 'is-one-quarter');
        magazineItem.dataset.name = item.id;

        magazineContainer.appendChild(magazineItem)
        fillMagazineItems(item)
    }
}

function fillMagazineItems(item){
    const magazineItem = document.querySelector(`.column[data-name='${item.id}']`);

    // Het invoegen van de title
    let itemTitle = document.createElement('p');
    itemTitle.classList.add('title');
    itemTitle.innerHTML = item.name;

    // het invoegen van de afbeelding
    let image = document.createElement('img');
    image.src = item.img;

    // Het invoegen van de twee buttons
    let detailButton = document.createElement('button');
    detailButton.classList.add('button', 'mt-2', 'details-button');
    detailButton.innerHTML ='details';

    let favoriteButton = document.createElement('button');
    favoriteButton.classList.add('button', 'mt-2', 'favorite-button');
    favoriteButton.innerHTML ='Add to favorites';



    // Het daadwerkelijk invoegen van de aangemaakt elementen
    magazineItem.appendChild(itemTitle);
    magazineItem.appendChild(image);
    magazineItem.appendChild(detailButton);
    magazineItem.appendChild(favoriteButton);


}



function showSidebar() {


        if (sidebarToggled !== true) {
            sidebarToggled = true;
            detailSidebar.classList.add('details');
            fillSidebar();
        } else {
        fillSidebar()
        }
}


function fillSidebar(clickedItem){

}

function addToFavorite(clickedItem){

console.log(clickedItem)

    let item = clickedItem.closest('.column').dataset.name

     let magazineItem = document.querySelector(`.column[data-name='${item}']`)

        removeFavoriteButton = document.createElement('button');
        removeFavoriteButton.classList.add('remove-favorite', 'button', 'mt-2')
        removeFavoriteButton.innerHTML = 'Remove from favorites';


        magazineItem.appendChild(removeFavoriteButton);


        magazineItem.classList.add('favorite')

        clickedItem.remove();

        addToLocalStorage(item);
}

function removeFromFavorite(clickedItem){

    let item = clickedItem.closest('.column').dataset.name

    let magazineItem = document.querySelector(`.column[data-name='${item}']`)

    let favoriteButton = document.createElement('button');
    favoriteButton.classList.add('button', 'mt-2', 'favorite-button');
    favoriteButton.innerHTML = 'Add to favorites';


    magazineItem.appendChild(favoriteButton);

    magazineItem.classList.remove('favorite');
    clickedItem.remove();
    removeFromLocalStorage(item);

}

function addToLocalStorage(item){
    favorites.push(item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function removeFromLocalStorage(item){
    favorites.splice();
    localStorage.setItem('favorites', JSON.stringify(favorites));
}



// functie voor het aanmaken van de de magazine kaartjes
/*function createMagazineItems(){
    // loop die ervoor zorgt dat elk item uit in dit geval de array
    for (let item of magazineItems) {

        // Het aanmaken van het vakje die de content gaat bevatten
        let magazineItem = document.createElement('div')
        magazineItem.classList.add('column', 'is-one-fourth');
        magazineItem.dataset.name = item;

        magazineContainer.appendChild(magazineItem)
        fillMagazineItems(item)
    }
}*/

/*function fillMagazineItems(item){

    let magazineItem = document.querySelector(`.column[data-name='${item.name}']`)

    // Het invoegen van de naam van de oefening in het vakje
    let exerciseName = document.createElement('p');
    exerciseName.classList.add('title');
    exerciseName.innerHTML = item;

    magazineItem.appendChild(exerciseName);

    // Het invoegen van de afbeelding bij de bijbehorende oefening
    let image = document.createElement('img')
    image.src = `img/${item}.png`

    magazineItem.appendChild(image);

    // Het invoegen van de twee buttons
    let detailButton = document.createElement('button');
    detailButton.classList.add('button', 'mt-2', 'details-button')
    detailButton.innerHTML = 'Details'

    let favoriteButton = document.createElement('button');
    favoriteButton.classList.add('button', 'mt-2', 'favorite-button');
    favoriteButton.innerHTML = 'Add to favorites';

    magazineItem.appendChild(detailButton);
    magazineItem.appendChild(favoriteButton);
}*/



