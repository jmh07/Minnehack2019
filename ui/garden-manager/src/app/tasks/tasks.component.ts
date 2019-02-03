import {Component, OnInit} from '@angular/core';
import {RestService, Task} from '../rest.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  private tasks: Task[];

  constructor(private restService: RestService) {
    this.restService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  ngOnInit() {
  }

}
