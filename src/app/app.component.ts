import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {filter, switchMap} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-hangman';
  config: any;
  public theme = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        filter((params: any) => !!params.theme),
        switchMap((params: any) => {
          this.theme = params['theme'];
          console.log('url', this.route);
          return this.http.get<string[]>(`/assets/${this.theme}/config.json`)
        })
      )
      .subscribe(config => {
        this.config = config;
      });
  }
}
