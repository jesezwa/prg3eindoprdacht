// Als pagina klaar is met laden roep init functie aan
window.addEventListener('load', init);
let detailSidebar;
let sidebarToggled;
let magazineItems = ['benchpress', 'squat', 'deadlift']
let magazineContainer;
let detailButton;
let addToFavoriteButton;
let removeFavoriteButton;


console.log('billen');
function init() {
    // Sidebar standaard uitzetten
    sidebarToggled = false;

    // Haalt de detailsidebar op uit de HTML
    detailSidebar = document.getElementById('detail-sidebar')

    magazineContainer = document.querySelector('.item-container')
    createMagazineItems();

    // de detail knop ophalen
    detailButton = document.querySelector('.details-button');
    magazineContainer.addEventListener('click', showSidebar)

    // de favorite knop ophalen
    addToFavoriteButton = document.querySelector('.favorite-button');
    addToFavoriteButton.addEventListener('click', addToFavorite)



}

// functie voor het aanmaken van de de magazine kaartjes
function createMagazineItems(){
    // loop die ervoor zorgt dat elk item uit in dit geval de array
    for (let item of magazineItems) {

        // Het aanmaken van het vakje die de content gaat bevatten
        let magazineItem = document.createElement('div')
        magazineItem.classList.add('column', 'is-one-fourth');
        magazineItem.dataset.name = item;

        magazineContainer.appendChild(magazineItem)
        fillMagazineItems(item)
    }
}

function fillMagazineItems(item){

    let magazineItem = document.querySelector(`.column[data-name='${item}']`)

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
}

function showSidebar(e) {
    sidebarToggled = true;

    let clickedButton = e.target;

    if (clickedButton.nodeName === 'BUTTON') {
        if (sidebarToggled === true) {
            detailSidebar.classList.add('details');
            fillSidebar();
        } else {
            fillSidebar();
        }
    }
}

function fillSidebar(clickedItem){

}

function addToFavorite(e){
    let clickedButton = e.target;

   
        let magazineItem = document.querySelector('.column')
        removeFavoriteButton = document.createElement('button');
        removeFavoriteButton.classList.add('remove-favorite', 'button', 'mt-2')
        removeFavoriteButton.innerHTML = 'Remove from favorites';

        magazineItem.appendChild(removeFavoriteButton);


        magazineItem.classList.add('favorite')

        addToFavoriteButton.remove();



}





