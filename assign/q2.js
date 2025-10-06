var units=400;

var bill=0;

if(units<=100){
    bill=units*5;
    console.log("the bill payed is:" + bill);
}
else if(units<=300){
    bill=(100*5)+((units-100)*7);
    console.log("the bill payed is:" + bill);
}
else{
    bill=(100*5)+(200*7)+((units-300)*10);
    console.log("the bill payed is:" + bill);
}