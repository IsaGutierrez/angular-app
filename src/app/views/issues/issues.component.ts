import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues = []

  constructor() { }

  ngOnInit(): void {
      fetch("https://api.github.com/repos/angular/angular/issues")
        .then(res => res.json())
        .then(result => {
          console.log(result)
          this.issues = result
        })
        .catch(error => console.log(error))
  }
}
