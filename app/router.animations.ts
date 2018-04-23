import {trigger, state, animate, style, transition, keyframes} from '@angular/core';

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
  export const enter = 
  trigger('enter',[
    state('*', style({ background:'#e74c3c'})),
    state('void', style({  background:'#e74c3c'})),
    transition(':enter',animate('.4s ease-in', keyframes([
      style({ opacity: 0, transform: 'translateY(-75%)', offset:0 }),
      style({ opacity: 0.5, transform: 'translateY(35px)', offset:.3 }),
      style({ opacity: 1, transform: 'translateY(0)', offset:1 }),
    ])))]);
    
    