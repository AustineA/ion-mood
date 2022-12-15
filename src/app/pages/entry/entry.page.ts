import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {
  entries = [
    {
      emoji: '😆',
      mood: 'An Awesome Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#CCFFED',
    },
    {
      emoji: '😊',
      mood: 'A Good Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#E3FEB8',
    },
    {
      emoji: '😐',
      mood: 'A Meh Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#D8E5EF',
    },
    {
      emoji: '😢',
      mood: 'A Bad Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#F5DFC9',
    },
    {
      emoji: '😣',
      mood: 'An Awful Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#F4C2C4',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
