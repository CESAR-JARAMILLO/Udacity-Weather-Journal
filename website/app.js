/* Global Variables */
const feelings = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '4eea124321f4cf6134b118ca8105f6e2';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */

/* Function to GET Web API Data*/
const getWeather = async (baseUrl, zip, key) => {
    const res = await fetch(`${baseUrl}?zip=${zip},us&units=metric&APPID=${apiKey}`)
    try{
        const data = await res.json();
        // console.log(data)
        return data;
    } catch(error) {
        console.log('error', error)
    }
}

/* Function to POST data */


/* Function to GET Project Data */