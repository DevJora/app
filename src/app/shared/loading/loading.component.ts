import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from '@angular/common';
import {LoadingService} from '../../core/loading.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-loading',
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements  OnInit {
  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    }
}
