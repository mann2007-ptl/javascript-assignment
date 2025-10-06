var income=750000;

var tax=0;

if(income<=250000){
    tax =0;
}
else if(income<=500000){
    tax=(income-250000) * 0.05;
}
else if(income<=1000000){
    tax=(500000-250000) * 0.05 + (income-500000) * 0.20;
}
else{
    tax=(500000-250000) * 0.05 + (1000000-500000) * 0.20 + (income-1000000) * 0.30;
}

console.log("income tax payed is :" + tax);
