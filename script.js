function filterByCity(targetCity, listingCityArray) {
  let listingIndexes = [];
  
  for(let i=0; i<listingCityArray.length; i++){
    if(targetCity.toUpperCase() == listingCityArray[i].toUpperCase()){
      listingIndexes.push(i);
    }
  }
  console.log("\nfilterByCity listingIndexes: " + listingIndexes + "\ntargetCity: " + targetCity + "\nlistingCityArray: " + listingCityArray)
  return listingIndexes;
  /* This return statement is here to show you what the UI looks like and will put every listing onto the page no matter what you search for. Remove the return statement before you start this function. */
  // return [...listingCityArray.keys()];
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let listingIndexes = [];

  for(let i=0; i<listingPriceArray.length; i++){
    if(listingPriceArray[i] <= maxPrice && listingPriceArray[i] >= minPrice){
      listingIndexes.push(i);
    }
  }
  console.log("\nfilterByPrice listingIndexes: " + listingIndexes + "\nlistingPriceArray: " + listingPriceArray)
  return listingIndexes;
  /* This return statement here to show you what the UI looks like and will put every listing onto the page no matter what you search for. Remove the return statement before you start this function. */
  // return [...listingPriceArray.keys()];
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let listingIndexes = [];
  
  for(let i=0; i<listingTypeArray.length; i++){
    for(let j=0; j<targetTypes.length; j++){
      if(listingTypeArray[i] == targetTypes[j]){
        listingIndexes.push(i);
        break;
      }
    }
  }
  console.log("\nfilterByTypes listingIndexes: " + listingIndexes + "\ntargetTypes: " + targetTypes + "\nlistingTypeArray: " + listingTypeArray)
  return listingIndexes;
  /* This return statement here to show you what the UI looks like and will put every listing onto the page no matter what you search for. Remove the return statement before you start this function. */
  // return [...listingTypeArray.keys()];
}