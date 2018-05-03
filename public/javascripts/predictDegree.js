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
    document.getElementById("degree").innerHTML=("type = "+type+ "degree = "+degree); 
  }
  if(type==2){
    var typeString="保守";
    document.getElementById("degree").innerHTML=("type = "+type+ "degree = "+degree);
  }
  
}

exports.setDegree=setDegree;