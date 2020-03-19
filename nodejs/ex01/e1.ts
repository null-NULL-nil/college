interface Counter
{
    count: number;
    inc(): void;
    dec(): void;
    currentCounter(): string;
}

export class CounterImpl implements Counter
{
    count: number;
    constructor()
    {
        this.count=0;
    }
    inc(): void
    {
        this.count++;
    }
    dec(): void
    {
        this.count--;
    }
    currentCounter(): string
    {
        return "count:"+this.count+'';
    }
    
}

