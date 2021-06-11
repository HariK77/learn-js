const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
    console.log('Key Down');
});

input.addEventListener('keyup', function (e) {
    console.log('Key Up');
});

input.addEventListener('keypress', function (e) {
    console.log('Key Press');
});


const addItemInput = document.querySelector('#add-item');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const newItem = document.createElement('li');
        newItem.innerText = this.value;

        itemsUl.append(newItem);

        this.value = '';
    }
})
