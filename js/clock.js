function openInput() {
  let person = prompt("Lütfen adınızı giriniz:");
  document.getElementById("myName").innerHTML = person;
}

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = date.getDay();
    var day;   
    switch (d) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 0:
            day = "Pazar";
            break;
        default:
            break;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + day;
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000);
}
showTime();