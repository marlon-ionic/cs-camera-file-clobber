import { Injectable } from '@angular/core';
import { CameraPhoto, CameraResultType, CameraSource, Plugins } from '@capacitor/core';
const { Camera } = Plugins;
declare var OriginalFile: any;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }


  async takePhoto(): Promise<CameraPhoto> {
    // Take a photo
    const cameraPhoto: CameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: false,
      quality: 90,
    });
    console.log('cameraPhoto', cameraPhoto);
    const fileExtension = cameraPhoto.format || cameraPhoto?.path.split('.').pop();
    console.log('fileExtension', fileExtension);
    const blob: any = await fetch(cameraPhoto.webPath).then(r => r.blob());
    console.log('blob', blob);
    const file = new OriginalFile([blob], `image_0.${fileExtension}`, {type: `image/${cameraPhoto.format}`});
    console.log('file!', file);
    return cameraPhoto;
  }
}
