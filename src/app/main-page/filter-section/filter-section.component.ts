import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent implements OnInit{
  public categoriesList: [] = [];
  public hashtagsList: [] = [];

  constructor() {
  }

  ngOnInit(): void {

  }
}
