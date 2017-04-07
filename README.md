# ng2-reactive-forms-validators
Angular2 Validators (ReactiveFormsModule)

## How to install
Angular2 Validators (ReactiveFormsModule)

``` npm install ng2-reactive-forms-validators --save ```

Then include the ng2-reactive-forms-validators in your project.

Using SystemJS, you can add a mapping to your System.config:

```
System.config({
      map: {
        ...,
        'ng2-reactive-forms-validators': 'npm:ng2-reactive-forms-validators/dist'
      },
      packages: {
        ....,
        "ng2-reactive-forms-validators": { main: 'index.js', defaultExtension: "js" }
    }
  });
  ```
  
## Custom Validate

You can create custom validations within your component and add them to your form by passing a message

```
emailValidator(control){
        // RFC 2822 compliant regex
        if (control.value && control.value != ' ') {
            if (control.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
                return null
            else
                return { 'customErro': { 'message': 'Invalid email' } }
        }
        return null
    }

```

```
ngOnInit() {
      this.form = this.fb.group({
        'Email': [this.email, [Validators.required, this.emailValidator]]
      });
}


send(event) {
      event.preventDefault();
      //if (this.form.valid)
      if (ValidationService.formIsValid(this.form))
            alert('Success')
}
```
The html would look like this:
```
<form [formGroup]="form" (ngSubmit)="send($event)">
      <div class="col-md-6">
          <label for="Email">Email</label>
          <input type="email" class="form-control" formControlName="Email" [(ngModel)]="email">
          <control-messages [control]="form.controls.Email" fieldName="Email"></control-messages>
      </div>
      <hr>
      <input type="submit" class="btn btn-success" value="Send">
</form>
```
