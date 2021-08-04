import { Component, Input} from "@angular/core";

@Component({
    selector: 'task-col',
    template: `
    <div *ngFor = "let bo of taskList">
        <tr>
           {{bo.body.text}} 
        </tr>

    </div>
    `,

})
export class TaskComponent{
    @Input() taskList: any;

}