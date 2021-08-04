import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <div class="container tabla">
      <table>
        <th *ngFor="let col of col_List">
          {{ col.header }}
        </th>
        <div class="row">
          <div *ngFor="let col of col_List">
            <task-col [taskList]="col"></task-col>
          </div>
        </div>
      </table>
    </div>
  `,
})
export class TableComponent {
  col_List = [
    {
      header: 'To Do',
      body: [
        { text: 'Task 1', visible: true },
        { text: 'Task 2', visible: true },
        { text: 'Task 3', visible: true },
        { text: 'Task 4', visible: true },
        { text: 'Task 5', visible: true },
      ],
    },
    {
      header: 'Done',
      body: [
        { text: 'Task 1', visible: true },
        { text: 'Task 2', visible: true },
        { text: 'Task 3', visible: true },
        { text: 'Task 4', visible: true },
        { text: 'Task 5', visible: true },
      ],
    },
  ];
}
