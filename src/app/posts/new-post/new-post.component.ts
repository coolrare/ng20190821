import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  // form = this.fb.group({
  //   title: this.fb.control('test'),
  //   body: this.fb.control('body......')
  // });

  get interest() {
    return this.form.get('interest') as FormArray;
  }

  requiredAndCheckLengthValidator = Validators.compose([Validators.required, Validators.minLength(15)]);

  form = new FormGroup({
    title: new FormControl('test', this.requiredAndCheckLengthValidator),
    body: new FormControl('body....'),
    interest: new FormArray([
      new FormControl(),
      new FormControl(),
    ])
  });

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.form.valueChanges.subscribe(data => console.log(data));
    this.form.statusChanges.subscribe(data => console.log(data));

  }

  createPost() {
    const data = {
      article: this.form.value
    };

    this.httpClient
      .post('http://localhost:3000/api/articles', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .subscribe();
  }
}
