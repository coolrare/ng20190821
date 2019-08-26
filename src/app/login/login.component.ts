import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { format } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  login(user: any) {
    // 登入...
    console.log(this.form.value);
    console.log(user);
    this.httpClient.post('http://localhost:3000/api/users/login', { user }).subscribe({
      next: (result: any) => {
        console.log(result.user.token);
        localStorage.setItem('userToken', result.user.token);
        this.router.navigateByUrl('/');
      },
      error: response => {
        console.log('error');
      }
    });
  }
}
