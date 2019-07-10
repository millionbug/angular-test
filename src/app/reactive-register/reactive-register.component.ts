import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-register',
    templateUrl: './reactive-register.component.html',
    styleUrls: ['./reactive-register.component.scss']
})
export class ReactiveRegisterComponent {

    testNgFormGroup = this.fb.group({
        firstName: [''],
        lastName: [''],
        accountName: ['', [
            Validators.required,
            function(accountName: FormControl) {
                if (accountName.value.trim().length === 0) {
                    console.log(false);
                    return null;
                }
            }]
        ],
        password: [''],
        repassword: [''],
        adress:  this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
        })
    });

    submit() {
        console.log(this.testNgFormGroup);
    }

    constructor(
        private fb: FormBuilder
    ) { }

}
