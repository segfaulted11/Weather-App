export const getGeoLocation = async(city) => {
//   console.log(city);
  const url= `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
  const result = await fetch(url);

  if(!result){
    throw new Error("Geocoding request failed!")
  }

  const data = await result.json();
//console.log(data)//returns the array of object, consisting the data for the city thats been typed in the input field.
  const place = data.results[0];
//   console.log(place)

  return {
    name : place.name,
    lat : place.latitude,
    long : place.longitude
  }

};
