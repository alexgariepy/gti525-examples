const petName = document.getElementById('name');
const petSpecies = document.getElementById('species');
const petAge = document.getElementById('age');
const addButton = document.getElementById('addButton');
const petList = document.getElementById('petList');


addButton.addEventListener('click', function () {
    const name = petName.value.trim();
    const species = petSpecies.value.trim();
    const age = petAge.value.trim();

    if (name === '' || species === '' || age === '') {
        alert('Please fill in all fields.');
        return;
    }

    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.className = 'btn';

    deleteButton.addEventListener('click', function () {
        petList.removeChild(listItem);
    });

    listItem.textContent = `${name} (${species}, ${age} ans)` + ' ';

    petList.appendChild(listItem);
    listItem.appendChild(deleteButton);

    // Clear input fields
    petName.value = '';
    petSpecies.value = '';
    petAge.value = '';
});