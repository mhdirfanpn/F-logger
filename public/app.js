import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const formData = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
formData.addEventListener("submit", (e) => {
    e.preventDefault();
    let docs;
    (type.value === 'invoice') ? docs = new Invoice(tofrom.value, details.value, amount.valueAsNumber) :
        docs = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(docs, type.value, 'end');
});
