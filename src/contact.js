
const contactContent = document.querySelector("#content");

export function createContactPage(){
    createContacts()
}

function createContacts(){
    let contact1Name = "Buddy Johnson";
    let contact1Phone = "111-111-1111";
    let contact1Email ="buddy@email.com";
    createContactEntry(contact1Name, contact1Phone, contact1Email);

    let contact2Name = "Suzy Johnson";
    let contact2Phone = "111-111-1112";
    let contact2Email ="suzy@email.com";
    createContactEntry(contact2Name, contact2Phone, contact2Email);

    let contact3Name = "Billy";
    let contact3Phone = "111-111-1113";
    let contact3Email ="bill@email.com";
    createContactEntry(contact3Name, contact3Phone, contact3Email);
}


function createContactEntry(person, phoneNum, email){
    const entry = document.createElement('div');
    entry.className = "contactContainer";
    const contactPerson = document.createElement('h3');
    contactPerson.textContent = person;
    entry.appendChild(contactPerson);
    const contactPhone = document.createElement('p');
    contactPhone.textContent = phoneNum;
    entry.appendChild(contactPhone);
    const contactEmail = document.createElement('p');
    contactEmail.textContent = email;
    entry.appendChild(contactEmail);
    contactContent.append(entry);
}