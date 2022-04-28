const newCaseAll = document.getElementById("new-case-all");
const totalCaseAll = document.getElementById("total-case-all");
const newDeathAll = document.getElementById("new-death-all");
const totalDeathAll = document.getElementById("total-death-all");
const newRecoveredAll = document.getElementById("new-recovered-all");
const totalRecoveredAll = document.getElementById("total-recovered-all");

axios
  .get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
  .then(function (response) {
    // debugger;
    const covidDataAll = response.data;
    // console.log(covidDataAll);
    const newCase = covidDataAll[0].new_case;
    // console.log(newCase);
    newCaseAll.innerHTML = newCase.toLocaleString();

    const totalCase = covidDataAll[0].total_case;
    totalCaseAll.innerHTML = totalCase.toLocaleString();

    const newDeath = covidDataAll[0].new_death;
    newDeathAll.innerHTML = newDeath.toLocaleString();
    const totalDeath = covidDataAll[0].total_death;
    totalDeathAll.innerHTML = totalDeath.toLocaleString();

    const newRecovered = covidDataAll[0].new_recovered;
    newRecoveredAll.innerHTML = newRecovered.toLocaleString();
    const totalRecovered = covidDataAll[0].total_recovered;
    totalRecoveredAll.innerHTML = totalRecovered.toLocaleString();
  });

const newCaseNum = document.getElementById("new-case");
const newDeathNum = document.getElementById("new-death");
const totalCaseNum = document.getElementById("total-case");
const totalDeathNum = document.getElementById("total-death");
const selectProvince = document.getElementById("province");

let covidData;

function getData(callback) {
  axios
    .get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces")
    .then(function (response) {
      covidData = response.data;
      console.log(covidData);

      for (let i in covidData) {
        const op = selectProvince.appendChild(document.createElement("option"));
        op.setAttribute("value", `${i}`);
        op.innerHTML = covidData[i].province;
        // console.log(typeof parseInt(i));
      }
      callback();
    });
}

function prov() {
  selectProvince.addEventListener("change", (event) => {
    const province = selectProvince.value;

    // console.log(province);
    const newCase = covidData[province].new_case;
    newCaseNum.innerHTML = newCase.toLocaleString();
    const newDeath = covidData[province].new_death;
    newDeathNum.innerHTML = newDeath.toLocaleString();
    const totalCase = covidData[province].total_case;
    totalCaseNum.innerHTML = totalCase.toLocaleString();
    const totalDeath = covidData[province].total_death;
    totalDeathNum.innerHTML = totalDeath.toLocaleString();
  });
}

getData(prov);
