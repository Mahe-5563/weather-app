require('./utils/geocode');
require('./utils/forecast');
const chalk = require('chalk');


const inputVal = process.argv[2];

inputVal ? 
geocode(inputVal, (error, location)=>{

    error 
        ? console.log(chalk.inverse.red.bold("ERROR in GEOGRAPHY: "), error) 
        : ''//console.log("LOCATION: ", location);

        // console.log(location)
        console.log(location.text)

        if(location.text){
            forecast(location.text, (error, forecast)=>{

                error 
                    ? console.log(chalk.inverse.red.bold("ERROR in FORECAST: "), error) 
                    : console.log(chalk.inverse.green.bold("FORECAST: "), forecast,
                         chalk.inverse.green.bold("\nLOCATION: "), location.text);
            })
        } else {
            console.log(chalk.inverse.red.bold("SOMETHING WRONG: "))
        }
})
: console.log(chalk.inverse.red.bold("NO INPUT LOCATION GIVEN: "), inputVal)