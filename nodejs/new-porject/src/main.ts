import { CounterImpl } from './e1';
import './style.css'
class MyCounter
{
    pele: HTMLParagraphElement;
    counter: CounterImpl;
    constructor(pele: HTMLParagraphElement)
    {
        this.pele = pele;
        this.counter = new CounterImpl();
    }

    inc()
    {
        this.counter.inc();
        this.refresh();
    }
    dec()
    {
        this.counter.dec();
        this.refresh();
    }

    refresh()
    {
        this.pele.innerText = this.counter.currentCounter();
    }
}

window.onload = function ()
{
    const pele = <HTMLParagraphElement>document.getElementById('counter');
    const myCounter = new MyCounter(pele);
    const buttons = document.getElementsByTagName('input');
    buttons[0].addEventListener('click', function ()
    {
        myCounter.inc();
    }); buttons[1].addEventListener('click', function ()
    {
        myCounter.dec();
    })
}