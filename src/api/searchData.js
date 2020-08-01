const cityList = require('./city.list.json');

let fullCityList = [];

//Filter names of cities.
for (let i = 0; i < cityList.length; ++i) {
    fullCityList.push({
        "city": cityList[i].name,
        "country": cityList[i].country
    });
}

const searchData = (query) => {
    return fullCityList.filter(name => name.city.toLowerCase().search(query.toLowerCase()) !== -1);
}

export default searchData;