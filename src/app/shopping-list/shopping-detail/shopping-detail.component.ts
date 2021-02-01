import { ElementRef, EventEmitter } from '@angular/core';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit {

  constructor() { }

  @ViewChild("nameInput") iName:ElementRef;
  @ViewChild("amountInput") iAmount:ElementRef;
  @Output() ingedientAdded=new EventEmitter<Ingredient>();

  ngOnInit(): void {
  }

  addIngredient(){
    const newIngredint=new Ingredient(this.iName.nativeElement.value,this.iAmount.nativeElement.value);
    this.ingedientAdded.emit(newIngredint);

  }

}
