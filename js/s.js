// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU&q=tanta

//key

//all data
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/126939?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU


// const api = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU&q=${search}`)

















// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU&q=tanta

//key

//all data
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/126939?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU


async function getKey(search) {
    const api = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU&q=${search}`)
    const responseData = await api.json()
    return responseData[0].Key;
}



async function getWeatherData(search) {
    const key = await getKey(search)
    const data = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=REOmUbymgm1tW8V3I1qWUtVgHxuDpTKU`)

    return data
}

const finalData = await getWeatherData('tanta').json()

console.log(finalData)