import { Component, OnInit } from '@angular/core';
import { SeoService, SeoModel } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    'http://placehold.it/1200x400/16a085/ffffff&text=Sobre Nos',
    'http://placehold.it/1200x400/e67e22/ffffff&text=Eventos',
    'http://placehold.it/1200x400/2980b9/ffffff&text=Ganhe&Dinheiro'
  ];
  constructor(seoService: SeoService) {
    let seoModel: SeoModel = <SeoModel>{
      title: 'Seja bem vindo!',
      robots: 'Index,Follow'
    };

    seoService.setSeoData(seoModel);
  }

  ngOnInit() {}
}
