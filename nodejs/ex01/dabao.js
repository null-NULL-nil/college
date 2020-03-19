(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var CounterImpl = /** @class */ (function () {
    function CounterImpl() {
        this.count = 0;
    }
    CounterImpl.prototype.inc = function () {
        this.count++;
    };
    CounterImpl.prototype.dec = function () {
        this.count--;
    };
    CounterImpl.prototype.currentCounter = function () {
        return "count:" + this.count + '';
    };
    return CounterImpl;
}());
exports.CounterImpl = CounterImpl;

},{}],2:[function(require,module,exports){
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

},{"./e1":1}]},{},[1,2]);
