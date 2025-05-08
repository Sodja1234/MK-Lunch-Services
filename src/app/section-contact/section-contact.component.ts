import { Component } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  imports: [],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.css'
})
export class SectionContactComponent {
  toOpen(){
    window.open('https://www.example.com', '_blank');
  }
}
