import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import * as contactActions from '../action/contact.actions';
import {Contact} from '../../contact';

@Injectable()
export class ContactEffects {

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActions.addContact),
      map( action => action.contact ),
      switchMap((contact: Contact) => [contactActions.addContactSuccess(contact)])
    ));

  constructor(private actions$: Actions) {}
}
