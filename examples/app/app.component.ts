import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder) { }

    public Name: string;
    public Secondname: string;
    public Email: string;

    ngOnInit() {
        this.form = this.fb.group({
            'Name': [this.Name],
            'SecondName': [this.Secondname],
            'Email': [this.Email],
        })

    }
}
