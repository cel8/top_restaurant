import { createHome } from 'Modules/home.js'

export class HomeController {
  constructor() {
  }
  prepareHome(imgPreviewContainer) {
    return createHome(imgPreviewContainer);
  }
}