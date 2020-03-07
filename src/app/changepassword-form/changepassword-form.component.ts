import { ChangePasswordValidators } from "./changepassword.validators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "changepassword-form",
  templateUrl: "./changepassword-form.component.html",
  styleUrls: ["./changepassword-form.component.css"]
})
export class ChangepasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          "",
          Validators.required,
          ChangePasswordValidators.wrongPassword
        ],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      { validator: ChangePasswordValidators.passwordsShouldMatch }
    );
  }

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }

  log() {
    console.log(this.form);
  }
}
