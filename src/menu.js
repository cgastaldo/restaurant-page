
const homeContent = document.querySelector("#content");

export function createMenuPage(){
    const menuHeader = document.createElement('div');
    menuHeader.id = 'headline';
    const menuHeader = document.createElement('h1');
    menuHeaderContent.textContent = "Menu";
    menuHeader.append(menuHeaderContent);

    homeContent.appendChild(menuHeader);

    const  = document.createElement('div');
    description.id = 'wonderful';
    const descriptionContent = document.createElement('p');
    descriptionContent.textContent = "This restaurant has been family owned for 15 generations" +
        " with only the most authentic food recipes. Nothing is fake and everything is edible. " + 
        "When you leave you'll ask yourself if you should take that second mortgage out so you " +
        "can eat here again? The answer is yes. While we pay our staff five cents under minimum " +
        "wage, we need money to afford our vacation home in the Caymans. We are the best " +
        "restaurant ever, voted by management.";
    description.append(descriptionContent);

    const imageHomePage = document.createElement('img');
    imageHomePage.id = 'imageHome';
    imageHomePage.src = cooking;
    description.appendChild(imageHomePage);

    homeContent.appendChild(description);
}

function createBeverageList(){
    //const beverage1 = document.createElement('div');
    //const beverage2 = document.createElement('div');
    //beverage1.className = "beverage";
    //beverage2.className = "beverage";
    beverage1 = createEntry(beverage1);


}

function createFoodList(){

}

function createEntry(entry){
    const entry = document.createElement('div');
    entry.className = "menuItem";
}