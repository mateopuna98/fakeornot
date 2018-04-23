import {trigger, state, animate, style, transition} from '@angular/core';

export const moveIn =
       trigger('moveIn', [
    state('void', style({position: 'fixed', width: '68%'}) ),
    state('*', style({position: 'fixed', width: '68%'}) ),
    transition(':enter', [
      style({opacity:'0', transform: 'translateY(200px)'}),
      animate('.6s ease-in-out', style({opacity:'1', transform: 'translateY(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateY(0)'}),
      animate('.3s ease-in-out', style({opacity:'0', transform: 'translateY(-200px)'}))
    ])
  ]);
