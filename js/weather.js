function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;

    // Your code here.
    location = document.getElementById('location').value;
    if (!location.match(/\S/g)) {
        // If the string is empty or contains spaces
        location = "Ann Arbor";
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";

    // Your code here.
    if (document.getElementById('fahrenheit').checked) {
        format = "imperial";
    }
    if (document.getElementById('celcius').checked) {
        format = "metric";
    }
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    let appid = "3b68941e28e061b39ae1314fa8ec1744";
    query = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${format}&appid=${appid}`
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log("Json: " + JSON.stringify(json));

        loc = json.name;
        temp = json.main.temp + " with " + json.weather[0].description;
        tempImg = "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png";

        console.log("tempImg: " + tempImg);

        document.getElementById('loc').textContent = loc;
        document.getElementById('temp').textContent = temp;
        document.getElementById('tempImg').src = tempImg;
        document.getElementById('forecast').style.display = "block";
    });
}
