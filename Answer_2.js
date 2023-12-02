// Q2. Write a program that grades students based on their marks
// . If greater than 90 then A Grade
// . If between 70 and 90 then a B grade
// . If between 50 and 70 then a C grade
// . below 50 then an F grade

let mark = 78;
if(mark>90){
    console.log("A Grade");
}else if(mark=>70 && mark<90){
    console.log("B Grade");
}else if(mark=>50 && mark<70){
    console.log("C Grade");
}else{
    console.log("F");
}
