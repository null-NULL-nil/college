import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit
{
    names: string[];
    constructor()
    {
        this.names = ['asdsad', ' 暗室逢灯', 'asdasdgfdbertg', '奥术大师国防生的广电该发生'];
    }

    ngOnInit(): void
    {
    }

}
