console.log("Hello Jee babbar");

const API_KEY="168771779c71f3d64106d8a88376808a";


function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}
async function fetchWeatherDetails(){
    try{
        // let latitude=15.3333;
   // let longitude=74.0833;
   let city="goa";

   const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

   const data=await response.json();
   //.json converts the data into the json format
   console.log("Weather data:-->" , data);

  // let newPara=document.createElement('p');
  // newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`

   //document.body.appendChild(newPara);
   renderWeatherInfo(data);
    }
    catch(err){
        //handle the error here
    }
   // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric

}
async function getCustomWeatherDetails(){
    try{
        let latitude=17.6333;
        let longitude=18.333;
    
        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
        `)
        let data=await result.json();
    
        console.log("Weather ->",data);
        renderWeatherInfo(data);

    }
    catch(err){
        console.log("Error Found" , err);
    }
    function switchTab(clickedTab){
        apiErrorContainer.classList.remove("active");

        if(clickedTab !== currentTab){
            currentTab.classList.remove("current-tab");
            currentTab=clickedTab;
            currentTab.classList.add("current-tab");

            if(!searchForm.classList.container("active")){
                userInfoContainer.classList.remove("active");
                grantAccessContainer.classList.remove("active");
                searchForm.classList.add("active");
            }
            else{
                searchForm.classList.remove("active");
                userInfoContainer.classList.remove("active");
                //getFromSessionStorage();
            }

        }

    }

   

    
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation support");
    }
}
function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
}