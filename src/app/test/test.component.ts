import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'iview-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        // here you can access params['user'], params['token'], etc.
        // tslint:disable-next-line:no-debugger
        console.log(123);
      });
  }

}
