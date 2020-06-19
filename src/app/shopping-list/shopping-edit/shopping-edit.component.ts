import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() action = new EventEmitter<{ action: string, payload: Object }>()
  @ViewChild('ingNameRef') ingNameRef: ElementRef
  @ViewChild('ingAmountRef') ingAmountRef: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked() {
    // emit to shopping-list
    this.action.emit({
      action: 'add',
      payload:
        new Ingredient(this.ingNameRef.nativeElement.value, this.ingAmountRef.nativeElement.value)
    })
  }

}
