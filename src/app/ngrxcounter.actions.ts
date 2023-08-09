import { createAction } from '@ngrx/store';

export const increment = createAction('[NGRXCounter Component] Increment');
export const decrement = createAction('[NGRXCounter Component] Decrement');
export const reset = createAction('[NGRXCounter Component] Reset');