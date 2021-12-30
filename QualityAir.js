/**
 * Author: Marcin Barszcz
 * Reviewer:
 * Created: 26/12/2021
 * Modified:
 */


AIR_QUALITY_TOKEN = '38f0bad8311c6532c40c52d192a8b7d1b1df6433'

async function getSearchedData() {
    const searchCity = document.querySelector(".main__input").value;
    const url = await fetch("https://api.waqi.info/search/?token=" + AIR_QUALITY_TOKEN + "&keyword=" + searchCity);
    const cityJSON = await url.json();
    const airQualityData = cityJSON.data;
    // console.log(airQualityData)


    const getAirQualityData = airQualityIndex => {
        let airPollutionLevel;
        let classAPL;

        if (airQualityIndex >= 0 && airQualityIndex <= 50) {
            airPollutionLevel = 'Bardzo dobra';
            classAPL = 'qualityLevel__good';
        } else if (airQualityIndex >= 51 && airQualityIndex <= 100) {
            airPollutionLevel = 'Dobra';
            classAPL = 'qualityLevel__moderate';
        } else if (airQualityIndex >= 101 && airQualityIndex <= 150) {
            airPollutionLevel = 'Umiarkowana';
            classAPL = 'qualityLevel__unhealthy-sentitive';
        } else if (airQualityIndex >= 151 && airQualityIndex <= 200) {
            airPollutionLevel = 'Dostateczna';
            classAPL = 'qualityLevel__unhealthy';
        } else if (airQualityIndex >= 201 && airQualityIndex <= 300) {
            airPollutionLevel = 'Zła';
            classAPL = 'qualityLevel__very-unhealthy';
        } else if (airQualityIndex >= 301) {
            airPollutionLevel = 'Bardzo zła';
            classAPL = 'qualityLevel__hazardous';
        } else {
            airPollutionLevel = 'Unknown (No Results Found)';
            classAPL = 'qualityLevel__unknown';
        }

        let categorized = {};
        categorized['airPollutionLevel'] = airPollutionLevel;
        categorized['classAPL'] = classAPL;

        return categorized;
    };

    let updatedHTML = "";

    if (airQualityData.length != 0) {
        airQualityData.map(searchCity => {
            const cityQualityIndex = searchCity.aqi;
            const searchDay = searchCity.time.stime.substring(0, 10);
            const searchTime = searchCity.time.stime.substring(10, 19);
            updatedHTML += `
                    <div class="${getAirQualityData(cityQualityIndex).classAPL} qualityLevel">
                        <h2><strong>Jakość powietrza: ${getAirQualityData(cityQualityIndex).airPollutionLevel} </strong></h2>
                        <h3> ${searchCity.station.name} </h3>
                        <h3> Pomiar wykonano: ${searchDay}, o godzinie: ${searchTime} </h3>
                    </div>`
        })
    }
    else {
        updatedHTML = `
                <div class="qualityLevel__noResults">
                    <h1> No Result Found</h1>
                </div>`
    }

    const displayData = document.querySelector(".main__informations");
    displayData.innerHTML = updatedHTML;

};

const showData = document.querySelector(".main__button");
showData.addEventListener('click', getSearchedData);