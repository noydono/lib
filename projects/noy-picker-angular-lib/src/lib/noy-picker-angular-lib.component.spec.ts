import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoyPickerAngularLibComponent} from './noy-picker-angular-lib.component';
import exp = require("constants");

describe('NoyPickerAngularLibComponent', () => {
  let component: NoyPickerAngularLibComponent
  let fixture: ComponentFixture<NoyPickerAngularLibComponent>

  let fakeQuestionText: string

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('I need to select a date', () => {

    it('should be a value', function () {
      expect(fixture.componentInstance.value).toEqual(moment())
    });
  })

  describe('I need to select a week',() => {

  })
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
