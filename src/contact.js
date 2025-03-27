export function createContact() {
    const mainContent = document.querySelector('#content');
    const contactPage = document.createElement('div');
    const locSection = document.createElement('section');
    const locHeading = document.createElement('h3');
    const address = document.createElement('address');
    const addressInfo = document.createElement('pre');
    const phone = document.createElement('p');
    const formSection = document.createElement('section');
    const formHeading = document.createElement('h3');
    const form = document.createElement('form');
    const sendBtn = document.createElement('button');

    // Clear previous page
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    // Address
    locHeading.textContent = 'Our Contact:';
    addressInfo.textContent = '555 Restaurantay Lane, Suite 3\nAccra, GH 55555-5555';
    phone.textContent = 'Tel: 555-555-5555';
    address.appendChild(addressInfo);
    address.appendChild(phone);
    locSection.appendChild(locHeading);
    locSection.appendChild(address);

    // Form
    formHeading.textContent = "We'd love to hear from you!";
    const formInfo = [
        { label: 'Name', inputType: 'text', name: 'name' },
        { label: 'Email', inputType: 'email', name: 'email' },
        { label: 'Message', inputType: 'textarea', name: 'message' },
    ];

    formInfo.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.name);
        label.textContent = field.label;
        let input;

        let inputType = field.inputType;
        if (inputType === 'textArea') {
            input = document.createElement('textarea');
            input.setAttribute('id', field.name);
            input.setAttribute('name', field.name);
        }
        else {
            input = document.createElement('input');
            input.setAttribute('type', field.inputType);
            input.setAttribute('id', field.name);
            input.setAttribute('name', field.name);
        }

        form.appendChild(label);
        form.appendChild(input);
    });
    sendBtn.textContent = 'Submit';
    form.appendChild(sendBtn);
    formSection.appendChild(formHeading);
    formSection.appendChild(form);

    contactPage.appendChild(locSection);
    contactPage.appendChild(formSection);

    mainContent.appendChild(contactPage);
}