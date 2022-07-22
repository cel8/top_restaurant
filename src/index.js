import _ from 'lodash';
import './style/style.css'
import { SkeletonController } from './controller/skeletonController'

// Global variable
const content = document.querySelector('#content');
const skeletonController = new SkeletonController();

window.onload = () => {
  skeletonController.createSkeleton(content);
}
