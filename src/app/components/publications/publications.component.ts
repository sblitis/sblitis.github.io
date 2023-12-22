import {Component, OnInit} from '@angular/core';
import {Publication} from "../../data/publication";
import {PublicationsService} from "../../services/publications.service";
import {PublicationComponent} from "../publication/publication.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    PublicationComponent,
    NgForOf
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent implements OnInit {
  publications! : ReadonlyArray<Publication>;
  constructor(private publicationsService: PublicationsService) { }
  ngOnInit(): void {
    this.publications = this.publicationsService.publications;
  }

}
