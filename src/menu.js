import water from './Images/water.jpg';
import penne from './Images/penne.jpg';
import wrap from './Images/wrap.jpg';
import steak from './Images/steak.jpg';

const menuContent = document.querySelector("#content");

export function createMenuPage(){
    const menuHeader = document.createElement('div');
    menuHeader.id = 'headline';
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";
    menuHeader.append(menuTitle);

    menuContent.append(menuHeader);
    createBeverageList();
    createFoodList();
}




function createBeverageList(){
    let bev1Title = "Water";
    let bev1Descr = "Quench your thirst with the original";
    let bev1Price = 15;
    let bev1Image = water;
    createEntry(bev1Title, bev1Descr, bev1Price, bev1Image);

    let bev2Title = "Not water";
    let bev2Descr = "The beverage title might be misleading";
    let bev2Price = 25;
    let bev2Image = water;
    createEntry(bev2Title, bev2Descr, bev2Price, bev2Image);
}

function createFoodList(){
    let food1Title = "Penne";
    let food1Descr = "No salt was used during during the cooking " +
        "process ensuring you'll enjoy every last bit";
    let food1Price = 28;
    let food1Image = penne;
    createEntry(food1Title, food1Descr, food1Price, food1Image);

    let food2Title = "Meat Wrap";
    let food2Descr = "Take the meat, take vegetables, place in wrap";
    let food2Price = 87;
    let food2Image = wrap;
    createEntry(food2Title, food2Descr, food2Price, food2Image);

    let food3Title = "Flame-grilled Steak with Vegetables";
    let food3Descr = "Product may vary";
    let food3Price = 95;
    let food3Image = steak;
    createEntry(food3Title, food3Descr, food3Price, food3Image);
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
    menuContent.append(entry);
}