axios.get("https://corona.lmao.ninja/v2/countries/").then(function (response) {
  const allCovidData = response.data;
  console.log(allCovidData);
  console.log(allCovidData[0].todayRecovered);
  const resultRecovery = allCovidData.reduce((total, country) => {
    return total + country.todayRecovered;
  }, 0);
  console.log(resultRecovery);

  const resultCountry = allCovidData
    .filter((res) => res.todayDeaths < 10 && res.population > 100000000)
    .map((x) => x.country);

  console.log(resultCountry);
});
