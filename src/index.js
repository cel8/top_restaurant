import _ from 'lodash';
import 'Style/style.css'
import { SkeletonController } from 'Controller/skeletonController'

// Global variable
const content = document.querySelector('#content');
const skeletonController = new SkeletonController();

window.onload = () => {
  skeletonController.createSkeleton(content);
}
