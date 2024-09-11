import cooking from './Images/water.jpg';

const homeContent = document.querySelector("#content");

export function createMenuPage(){
    const menuHeader = document.createElement('div');
    menuHeader.id = 'headline';
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";
    menuHeader.append(menuTitle);

    homeContent.append(menuHeader);

}

function createBeverageList(){
    bev1Title = "Water";
    bev1Descr = "Quench your thirst with the original";
    bev1Price = 15;
    bev1Image = water;

    a = createEntry(bev1Title, bev1Descr, bev1Price, bev1Image);
    homeContent.append(a);
    //eateEntry(beverage2);



}

function createFoodList(){

}

function createEntry(title, description, price, image){
    const entry = document.createElement('div');
    entry.className = "menuItem";
    const entryTitle = document.createElement('h3');
    entryTitle.textContent = title;
    entry.appendChild(entryTitle);
    const entryDescription = document.createElement('p');
    entryDescription.textContent = description;
    entry.appendChild(entryDescription);
    const entryPrice = document.createElement('p');
    entryPrice.textContent = "$" + String(price);
    entry.appendChild(entryPrice);
    const entryImage = document.createElement('img');
    entryImage.className = 'entryImage';
    entryImage.src = image;
    entry.appendChild(entryImage);
}