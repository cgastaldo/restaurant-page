export const greeting = "hello, buddy";

const headline = document.createElement('div');
headline.id = 'headline';
const headlineContent = document.createElement('h1');
headlineContent.textContent = "Really catchy headline";
headline.append(headlineContent);

const description = document.createElement('div');
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
imageHomePage.setAttribute('src', './Images/Cooking.jpg');


