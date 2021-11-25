import { Component, OnInit } from '@angular/core';
import { MatakuliahService } from '../matakuliah.service';

@Component({
  selector: 'app-mata-kuliah-list',
  templateUrl: './mata-kuliah-list.component.html',
  styleUrls: ['./mata-kuliah-list.component.css']
})
export class MataKuliahListComponent implements OnInit {
  
  public course = [] as any;
  constructor(private courseService: MatakuliahService) { }

  ngOnInit(): void {
    this.course = this.courseService.getCourses();
  }

}
