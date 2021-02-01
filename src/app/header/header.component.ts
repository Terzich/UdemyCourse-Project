import {Component, Output,EventEmitter} from '@angular/core';

@Component({
selector: 'app-header',
templateUrl:'./header.component.html'
})

export class HeaderComponent{
collapsed=true;

@Output() headerChanged=new EventEmitter<string>();

headerClicked (header:string)
{
    this.headerChanged.emit(header);
}

}