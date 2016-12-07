import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {HeroSearchService} from "./hero-search.service";
import {Hero} from "./hero";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  moduleId:module.id,
  selector:'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero>;
  private searchTerms = new Subject<string>();

  constructor (
    private searchService : HeroSearchService,
    private router : Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.searchService.search(term) : Observable.of<Hero[]>([]))
      .catch( error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail/', hero.id];
    this.router.navigate(link);
  }
}
