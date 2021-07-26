import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') editForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(this.editItemIndex);
        this.editForm.setValue({
          "name": this.editedItem.name,
          "amount": this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editItemIndex);
  }

  addIngredient(form: NgForm) {
    const formValue = form.value;
    const newIngredint = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredint);
    }
    else {
      this.shoppingListService.addIngredient(newIngredint);
    }
    this.editMode = false;
    form.reset();
  }

}
