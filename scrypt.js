function GetPrayerTime(city = "cairo",country = "Egypt"){
    let request = axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`)
    request.then((response)=>{
    let timingData = response.data.data.timings;
    let c = document.querySelector(".city");
    c.innerHTML = city;
    (Object.keys(timingData)).forEach((k) => {
        let prayers = document.querySelectorAll(".prayer");
        prayers.forEach(p => {
            if(p.innerHTML == k)
                p.nextElementSibling.innerHTML = timingData[k];
        })
    })
    let mDate = response.data.data.date.readable;
    let date1 = document.querySelector(".m");
    date1.innerHTML = mDate; 
    let date2 = document.querySelector(".h");
    date2.innerHTML = response.data.data.date.hijri.date; 
    document.querySelector(".day").innerHTML = response.data.data.date.hijri.weekday.ar
    });
}
document.querySelector("input[type = 'submit']").addEventListener("click",function(){
    let choice = document.querySelector("input")
    let value = choice.value;
    if(value.length > 0){
        let city = value.substring(0,value.indexOf(","));
        let country = value.substring(value.indexOf(","));
        GetPrayerTime(city,country);
    }else{
        alert("اختر مدينة")
    }
    
})
GetPrayerTime();
