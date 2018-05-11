var type;
var degree=0;

function setDegree(d){
  degree=d;
  test();
}
function test(){
  console.log("set degree"+degree);
}

function setType(t){
  type=t;
  configuration();
}
function configuration(){

  if(type==1){
    console.log("hi"+degree);
    var typeString="冒險";
    document.getElementById("aggressive").style.color="#FFD43A";
    document.getElementById("conservative").style.color="white";
    document.getElementById("box1").innerHTML=("60%"); 
  }
  if(type==2){
    var typeString="保守";
    document.getElementById("aggressive").style.color="white";
    document.getElementById("conservative").style.color="#FFD43A";
    document.getElementById("box1").innerHTML=("30%");
  }
  
}

exports.setDegree=setDegree;