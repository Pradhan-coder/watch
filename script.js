let c = document.querySelector(".clock");
let d = document.querySelector(".date");

setInterval(() => {
   let today = new Date();
   let hh = today.getHours();
   let mm = today.getMinutes();
   let ss = today.getSeconds();
   let date = today.toDateString();
   let session = "AM";
   if(hh == 0){
       hh = 12;
   }else if(hh > 12){
       hh = hh - 12;
       session = "PM"
   }
   if(hh < 10){
       hh = "0" + hh;
   }
   if(mm < 10){
    mm = "0" + mm;
}

if(ss < 10){
 ss = "0" + ss;
}

   c.innerText = `${hh} : ${mm} : ${ss} ${session}`;
   d. innerText = date;
}, 1000);


function padding(n){
    return n.toString().pasStart(2, "0");
}

function renderTime(){
    let date = new Date();
    let year  = date.getYear();
    if(year < 1000){
        year += 1900;
    }
    let dd = date.getDate();
    let mm  = day.getMonth();
    let yy = day.getYear();
    let ddArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    let mmArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
}