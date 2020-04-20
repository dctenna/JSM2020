async function getCityTemperatureObject(cities, countOfRetries) {
  const citiesTemperaturesObj = {};

  for (const city of cities) {
    await getTemperature(city, countOfRetries)
      .then((response) => response.json())
      .then((temperature) => {
        citiesTemperaturesObj[city] = temperature.main.temp;
      });
  }

  return citiesTemperaturesObj;
}

async function getTemperature(city, countOfRetries) {
  const key = "5e0a0a9ffad7f1a80d1f86d42cf641eb";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const result = await fetch(url);

    return result;
  } catch {
    countOfRetries--;

    if (countOfRetries > 0) {
      return getTemperature(city, countOfRetries);
    } else {
      return null;
    }
  }
}

getCityTemperatureObject(["London", "Paris", "Vena", "Lviv"], 1).then((data) =>
  console.log(data)
);
