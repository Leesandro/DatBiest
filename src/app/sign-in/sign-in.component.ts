import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { FormControl,FormsModule, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'


@Component({
  selector: 'an-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css','./nicepage.css','./SignIn.css']
})
export class SignInComponent implements OnInit {

  constructor(private service: Service) { }

  ngOnInit(): void { }

  firstname = '';
  lastname = '';
  email = '';
  phonenumber = '';
  password = '';

  public RegisterForm: FormGroup = new FormGroup({
    firstname: new FormControl('',[
      Validators.required
    ]),
    lastname : new FormControl('',[
      Validators.required
    ]),
    phonenumber: new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
    
    });

   
    


    UserCreate(): void {
      alert('Text changed to' + this.firstname + this.lastname + this.email + this.phonenumber + this.password);
      let user = {
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      phoneNumber: this.phonenumber,
      password : this.password
      // priority: parseInt(this.taskpriority)
      };
      this.service.addUserData(user);
    }


}
