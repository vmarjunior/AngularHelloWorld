import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {
  static wrongPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value != "valdirpassword") resolve({ wrongPassword: true });
        else resolve(null);
      }, 1000);
    });
  }

  static passwordsShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    let newPassword = control.get("newPassword").value;
    let confirmPassword = control.get("confirmPassword").value;

    if (newPassword !== confirmPassword) return { passwordsShouldMatch: true };
    else return null;
  }
}
