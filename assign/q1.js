var sub1=56;
var sub2=78;
var sub3=54;
var sub4=89;
var sub5=94;

var total=sub1+sub2+sub3+sub4+sub5;

var percentage = total/5;
console.log(percentage);

if(percentage>=90){
    console.log("Grade A");
}
else if(percentage>=80 && percentage<=89){
    console.log("Grade B");
}
else if(percentage>=70 && percentage<=79){
    console.log("Grade C");
}
else if(percentage>=60 && percentage<=69){
    console.log("Grade D");
}
else{
    console.log("Fail");
}
