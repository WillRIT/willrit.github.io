// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  return PLACES.filter(place => place.type === typePreference);
}

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  const div = document.createElement('div');

  // Step 2: Add the col class to the new div element
  div.classList.add('col');

  // Step 3: Set the innerHTML of the div with a template string
  div.innerHTML = `
    <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
      <img src="${place.img}" class="card-img-top h-100" alt="${place.name}">
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
      </div>
    </div>
  `;

  // Step 4: Return the element
  return div;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id of "recommendations" in a variable
  const recommendations = document.getElementById('recommendations');

  // Step 2: Clear the "recommendations" innerHTML
  recommendations.innerHTML = '';

  // Step 3: Loop through the filteredPlaces array
  filteredPlaces.forEach(place => {
    // Step 4: Create a card for each place using the createCard function
    const card = createCard(place);

    // Step 5: Add/append each card to the recommendations DOM element
    recommendations.appendChild(card);
  });
}


// Task 4
function findPlaceByName(placeName) {
    return PLACES.find(place => place.name === placeName);
  }
