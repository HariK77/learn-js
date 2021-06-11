const form = document.querySelector('#signup-form');

const creditCard = document.querySelector('#cc');
const terms = document.querySelector('#terms');
const veggie = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
    // alert("Form Submitted");
    e.preventDefault();
    // console.log(e);
    // console.log('CC', creditCard.value);
    // console.log('terms', terms.checked);
    // console.log('Vegetable', veggie.value);
    console.log(formData);
});

const formData = {};

// creditCard.addEventListener('input', (e) => {
//     console.log('CC Changed', e);
//     formData['cc'] = e.target.value;

// });

// veggie.addEventListener('input', (e) => {
//     console.log('Veggie Changed', e);
//     formData['veggie'] = e.target.value;

// });

// terms.addEventListener('input', (e) => {
//     console.log('Checkbox Changed', e);
//     formData['agreeToTerms'] = e.target.checked;
// });

for (let input of [creditCard, terms, veggie]) {
//     input.addEventListener('input', e => {
//         formData[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value
//     });
    // input.addEventListener('input', ({target}) => {
    //     const {name, type, checked, value} = target;
    //     formData[name] = type === 'checkbox' ? checked : value;
    // });
    input.addEventListener('change', ({target}) => {
        const {name, type, checked, value} = target;
        formData[name] = type === 'checkbox' ? checked : value;
    });
}