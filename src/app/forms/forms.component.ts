import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { User } from "./user";

@Component({
	moduleId: module.id,
  	selector: 'forms',
  	templateUrl: 'forms.component.html',
  	styleUrls: ['forms.component.css']
})

export class FormsComponent implements AfterViewInit {
	model: User = new User(1, "", "", null);
	roles: string[] = ["Guest", "Moderator", "Administartor"];
	submitted: boolean = false;

	formErrors = {
        "name": "",
        "age": ""
    };

    // Объект с сообщениями ошибок
    validationMessages = {
        "name": {
            "required": "Обязательное поле.",
            "minlength": "Значение должно быть не менее 4х символов.",
        },
        "age": {
            "required": "Обязательное поле."
        }
    };

    // ViewChild - используем для получения доступа к указанному компоненту и его методам
    @ViewChild('userForm') userForm: NgForm;

    ngAfterViewInit() {
        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
    	console.log(data);
        if (!this.userForm) return;
        let form = this.userForm.form;

        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            let control = form.get(field);
            console.log(field);
            console.log(control);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];
                for (let key in control.errors) {
                	console.log(key);
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
