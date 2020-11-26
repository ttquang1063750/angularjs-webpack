import {DirectoryController} from './directory.contronller';
import {RandomNinjaDirective} from './directory.directive';

angular.module('DirectoryModule', [])
    .component('directory', {
        templateUrl: 'views/directory.html',
        controller: ['$http', '$scope', 'customFactory', DirectoryController]
    })
    .directive('randomNinja', [RandomNinjaDirective]);
