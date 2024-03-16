// Als pagina klaar is met laden roep init functie aan
window.addEventListener('load', init);
let detailSidebar;
let sidebarToggled;
let magazineContainer;
let removeFavoriteButton;
let exerciseData = {};
let favorites = [];
let url;
let descriptionSet;


console.log('billen');
function init() {
    // Sidebar standaard uitzetten
    sidebarToggled = false;
    descriptionSet = false;
    url = 'http://localhost/prg3eindoprdacht/webservice/';

    // Haalt de detailsidebar op uit de HTML
    detailSidebar = document.getElementById('detail-sidebar')

    magazineContainer = document.querySelector('.item-container')
    magazineContainer.addEventListener('click', itemClickHandler);

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
    let clickedButton = e.target;
    console.log(clickedButton);

    if (clickedButton.classList.contains('details-button')){
        const exerciseId = clickedButton.closest('.column').dataset.id;
        ajaxRequest(`${url}?id=${exerciseId}`, fillSidebar);
        showSidebar(clickedButton);

    }

    if (clickedButton.classList.contains('favorite-button')){
        addToFavorite(clickedButton);
    }

    if (clickedButton.classList.contains('remove-favorite')){
        removeFromFavorite(clickedButton);
    }
}

function createMagazineItems(data){
    console.log(data);

    for (const item of data){

        // Het aanmaken van het vakje die de content gaat bevatten
        let magazineItem = document.createElement('div')
        magazineItem.classList.add('column', 'is-one-quarter');
        magazineItem.dataset.id = item.id;

        exerciseData[item.id] = item;



        magazineContainer.appendChild(magazineItem)
        fillMagazineItems(item)
    }

}

function fillMagazineItems(item){
    const magazineItem = document.querySelector(`.column[data-id='${item.id}']`);

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

    console.log(exerciseData);


}



function showSidebar(clickedButton) {


        if (sidebarToggled !== true) {
            sidebarToggled = true;
            detailSidebar.classList.add('details');
            fillSidebar(clickedButton);
        } else {
        fillSidebar(clickedButton)
        }
}


function addToFavorite(clickedButton) {

    console.log(clickedButton)

    let item = clickedButton.closest('.column').dataset.id

    let magazineItem = document.querySelector(`.column[data-id='${item}']`)

    removeFavoriteButton = document.createElement('button');
    removeFavoriteButton.classList.add('remove-favorite', 'button', 'mt-2')
    removeFavoriteButton.innerHTML = 'Remove from favorites';


    magazineItem.appendChild(removeFavoriteButton);


    magazineItem.classList.add('favorite')

    clickedButton.remove();


}

function removeFromFavorite(clickedButton) {

    let item = clickedButton.closest('.column').dataset.id

    let magazineItem = document.querySelector(`.column[data-id='${item}']`)

    let favoriteButton = document.createElement('button');
    favoriteButton.classList.add('button', 'mt-2', 'favorite-button');
    favoriteButton.innerHTML = 'Add to favorites';


    magazineItem.appendChild(favoriteButton);

    magazineItem.classList.remove('favorite');
    clickedButton.remove();


}



function fillSidebar(data) {
    if (data) {
    if (descriptionSet === false) {
        descriptionSet = true;
        let description = document.createElement('p');
        description.innerHTML = data.Description;

        detailSidebar.appendChild(description);
    } else {
        let description = detailSidebar.querySelector('p');
        description.innerHTML = data.Description;
    }

    }


}

/*function addToLocalStorage(item){
    favorites.push(item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function removeFromLocalStorage(item){
    favorites.splice();
    localStorage.setItem('favorites', JSON.stringify(favorites));
}*/



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



