import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrl: SafeResourceUrl;
  title = 'cs-camera-file-clobber';

  constructor(private domSanitizer: DomSanitizer, private photoService: PhotoService) { }

  async takePhoto(): Promise<void> {
    const cameraPhoto = await this.photoService.takePhoto();
    // You can view the File / OriginalFile code in PhotoService
    this.imageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(cameraPhoto.webPath);
  }
}
