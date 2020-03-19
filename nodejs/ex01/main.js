"use strict";
exports.__esModule = true;
var e1_1 = require("./e1");
var MyCounter = /** @class */ (function () {
    function MyCounter(pele) {
        this.pele = pele;
        this.counter = new e1_1.CounterImpl();
    }
    MyCounter.prototype.inc = function () {
        this.counter.inc();
        this.refresh();
    };
    MyCounter.prototype.dec = function () {
        this.counter.dec();
        this.refresh();
    };
    MyCounter.prototype.refresh = function () {
        this.pele.innerText = this.counter.currentCounter();
    };
    return MyCounter;
}());
window.onload = function () {
    var pele = document.getElementById('counter');
    var myCounter = new MyCounter(pele);
    var buttons = document.getElementsByTagName('input');
    buttons[0].addEventListener('click', function () {
        myCounter.inc();
    });
    buttons[1].addEventListener('click', function () {
        myCounter.dec();
    });
};
