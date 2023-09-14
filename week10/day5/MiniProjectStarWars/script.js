let previousCharacterId = null

//fetch
async function fetchCharacterData(characterId) {
    const apiUrl = `https://swapi.dev/api/people/${characterId}/`;

    const res =  await fetch(apiUrl)
    const data = await res.json()
    return data
}
//information on the DOM
function displayCharacterInfo(character) {
    const nameElement = document.getElementById('name');
    const heightElement = document.getElementById('height');
    const genderElement = document.getElementById('gender');
    const birthYearElement = document.getElementById('birthYear');
    const homeWorldElement = document.getElementById('homeWorld');

    nameElement.textContent = `Name: ${character.name.toUpperCase()}`;
    heightElement.textContent = `Height: ${character.height} cm`;
    genderElement.textContent = `Gender: ${character.gender}`;
    birthYearElement.textContent = `Birth Year: ${character.birth_year}`;

    // Fetch home world
    fetch(character.homeworld)
        .then(response => response.json())
        .then(homeWorldData => {
            homeWorldElement.textContent = `Home World: ${homeWorldData.name}`;
        })
        .catch(error => {
            console.error('Error fetching home world data:', error);
        });
}

// random character ID
function getRandomCharacterId() {
    const maxCharacterId = 83; 
    let randomCharacterId;

    do {
        randomCharacterId = Math.floor(Math.random() * maxCharacterId) + 1;
    } while (randomCharacterId === previousCharacterId);

    previousCharacterId = randomCharacterId;
    return randomCharacterId;
}
//loading spinner
 async function showLoadingScreen() {
    const characterId = getRandomCharacterId();
    const character = await fetchCharacterData(characterId);
    displayCharacterInfo(character);
    hideLoadingScreen();
}

// Hide the loading spinner
function hideLoadingScreen() {
    const loadingSpinner = document.querySelector('.fa-spinner.fa-spin-pulse');
    loadingSpinner.style.display = 'none';
}


const findSomeoneButton = document.getElementById('findSomeone');
const errorMessageElement = document.getElementById('errorMessage');

//find SOme1
findSomeoneButton.addEventListener('click', async () => {
    showLoadingScreen(); 
    // const characterId = getRandomCharacterId();
    // const character = await fetchCharacterData(characterId)
    // console.log(character);
        
    //         displayCharacterInfo(character);
    //         hideLoadingScreen(); 
        });
            // })
        // .catch(error => {
        //     console.error('Error fetching character data:', error);
        //     hideLoadingScreen(); 
        //     errorMessageElement.textContent = 'Oh no! The person is not found';
        // });


// Initial character
// findSomeoneButton.click();


