// function plus(n1 :number,n2 :number){
//     return n1+n2;
// }
// const n1=5;
// const n2=2.8;
// const res=plus(n1,n2);
// console.log(res);

function Logger(constructor:Function){
console.log("logging");
}
@Logger
class Person{
    name='max';
    constructor(){
        console.log("creating person object");
    }
}
const pers=new Person();
console.log(pers); 
