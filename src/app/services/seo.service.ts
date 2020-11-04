import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta, private router: Router) { }

  generateTags({ title = '', description = '', image = '' }) {

    this.title.setTitle(title);
    this.meta.addTags([]
    );
  }
}
