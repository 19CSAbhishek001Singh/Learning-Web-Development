"use strict";
// function plus(n1 :number,n2 :number){
//     return n1+n2;
// }
// const n1=5;
// const n2=2.8;
// const res=plus(n1,n2);
// console.log(res);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("logging");
}
let Person = class Person {
    constructor() {
        this.name = 'max';
        console.log("creating person object");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
