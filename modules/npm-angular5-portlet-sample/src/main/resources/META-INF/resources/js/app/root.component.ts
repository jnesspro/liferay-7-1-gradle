import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'root-component',
	templateUrl: '/o/npm-angular5-portlet-sample/js/app/root.component.html',
})
export class RootComponent {
	submit(theForm: NgForm) {
		alert(`Hello ${theForm.value.name}!`);
	}
}
