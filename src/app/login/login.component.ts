import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit() {}

  login() {
    // 登入...
    console.log(this.user);
    this.httpClient.post('http://localhost:3000/api/users/login', { user: this.user }).subscribe({
      next: (result: any) => {
        console.log(result.user.token);
        localStorage.setItem('userToken', result.user.token);
        this.router.navigateByUrl('/');
      },
      error: (response) => {
        console.log('error');
      }
    });
  }
}
