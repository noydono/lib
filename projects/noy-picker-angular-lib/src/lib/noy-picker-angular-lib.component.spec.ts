import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoyPickerAngularLibComponent} from './noy-picker-angular-lib.component';
import * as moment from 'moment';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NoyPickerAngularLibComponent', () => {
  let component: NoyPickerAngularLibComponent
  let fixture: ComponentFixture<NoyPickerAngularLibComponent>

  let endOfWorld = moment("2012-12-12");
  let endOfWorldWithTime = moment("2012-12-12 12:12:12");

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoyPickerAngularLibComponent]
    })
      .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoyPickerAngularLibComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  });

  it('Value exists', function () {
    component.writeValue(endOfWorld)
    fixture.detectChanges()

    expect(component.value).toEqual(endOfWorld)
  });

  it('Value is empty', function () {
    component.writeValue("")
    fixture.detectChanges()

    expect(component.month).toEqual(moment().startOf('month'))
  });

  it('Value is a string', function () {
    component.writeValue("2012-12-12")
    fixture.detectChanges()

    expect(component.value).toEqual(endOfWorld)
  });

  it('Month exists', function () {
    component.writeValue(endOfWorld)
    fixture.detectChanges()

    expect(component.month).toEqual(endOfWorld.startOf('month'))
  });

  it('Year exists', function () {
    component.writeValue(endOfWorld)
    fixture.detectChanges()

    expect(component.year).toEqual(endOfWorld.startOf('year'))
  });

  it('Time exists', function () {
    component.time = true
    fixture.detectChanges()

    expect(component.time).toBeTruthy()
  });

  it('should the hours equals to hours value', function () {
    component.time = true
    component.writeValue(endOfWorldWithTime)
    fixture.detectChanges()

    expect(component.hour).toEqual(endOfWorldWithTime.hour())
    expect(component.minute).toEqual(endOfWorldWithTime.minute())
  });

  it('should time is true and the value is empty', function () {
    component.time = true
    component.writeValue("")
    fixture.detectChanges()

    expect(component.hour).toEqual(moment().hour())
    expect(component.minute).toEqual(moment().minute())
  });
});

/*
*   je doit pouvoir choisir un mode avec une date
*       je doit pouvoir changer le format de cette date
*       je doit pouvoir choisir si je veux une date avec ou sans heure
*       je doit pouvoir changer la date et/ou l'heure
*       je doit voir le jour mois années courant
*       je doit pouvoir rapidement selection le date de current/now
*   je doit pouvoir choisir un mode week
*       je doit pouvoir selectioner une semaine de lundi a dimanche
*       je doit pouvoir selectionner une semaine de samedi a samedi
*       je doit pouvoir rapidement selection la semain courrant
*       je doit pouvoir selectioner le mois et l'années
*
* */

// //GIVEN
// //SETUP: Fake question on the component instance
// beforeEach(() => {
//   fakeQuestionText = "FAKE QUESTION"
//
//   fixture.componentInstance.questionText = fakeQuestionText
// })
//
// //WHEN
// //ACTION: Trigger change detection
// beforeEach(() => {
//   fixture.detectChanges()
// })
//
// //THEN
// //OUTCOME: verify that the fake question text is on the template
// it('should ',  () => {
//   let questionElement = fixture.nativeElement.querySelector("[data-testId='question']")
//   expect(questionElement.textContent).toEqual(fakeQuestionText)
// });
