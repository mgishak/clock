setInterval(myAll,500);

function myAll(){
var d = new Date;
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var ap = d.getHours();
h = my(h) && hp(h);
m = my(m);
s = my(s);
ap = ampm(ap);
document.getElementById("demo").innerHTML = h +":"+ m + ":"+ s + ap ;

function hp(h){
  if (h == 00){
      h = "12";
  }else if (h > 12){
        h = h-12;
  }else if (h < 10){
    h = "0"+h;
  }
  return h;
};

function my(i){
    if(i < 10){
        i = "0"+ i;
    }
    return i;
  };
  function ampm(ap){
    if(ap < 12){
        ap = "am";
    }else {
      ap = "pm";
    }
    return ap;
  };

}
setInterval(rote,4000);
function rote(){
  if(document.querySelector(".clock").classList.contains("roo") ){
    document.querySelector(".clock").classList.remove("roo");
    document.querySelector(".clock").classList.add("roo2");
  }else if (document.querySelector(".clock").classList.contains("roo2")){
    document.querySelector(".clock").classList.add("roo");
    document.querySelector(".clock").classList.remove("roo2")
  }
}
