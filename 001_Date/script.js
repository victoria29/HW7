var okBtn = document.querySelector('button');

okBtn.addEventListener('click',function () {
   var day = document.getElementById('inputDate').value;
   var date = new Date(day);
    var x = date.getDay();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    if(x<1){
        x=7;
        document.getElementById("demo").innerText = weekday[date.getDay()] + " - " + x;
    } else{
        document.getElementById("demo").innerText = weekday[date.getDay()] + " - " + date.getDay();
    }
});
