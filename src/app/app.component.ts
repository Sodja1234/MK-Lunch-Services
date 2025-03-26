import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServiceComponent } from './section-service/section-service.component';
import { SectionGalleryComponent } from './section-gallery/section-gallery.component';
import { SectionContactComponent } from './section-contact/section-contact.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,
    SectionServiceComponent, SectionGalleryComponent, SectionContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MK-Lunch-Services';
}
