import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../userService/service.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class childComponent implements OnInit {

    // person = [
    //     { name: "John", id: 100 },
    //     { name: "shaikh", id: 101 }
    // ]

    // @Input() childValue: any;
    // @Output() messagefromChild: EventEmitter<string> = new EventEmitter<string>();
    // child = false;
    // childtoParent() {
    //     this.messagefromChild.emit('this is from child to parent');
    //     this.child = !this.child;
    // }

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        checked: new FormControl('', [Validators.required, Validators.requiredTrue])
    })
    get email() {
        return this.loginForm.get('email')
    }
    get password() {
        return this.loginForm.get('password')
    }
    get checked() {
        return this.loginForm.get('checked')
    }
    login() {
        console.log('Email ', this.email.value)
        console.log('password', this.password.value);

    }
    constructor(private user: ServiceService) { }

    ngOnInit(): void {
    }
}
