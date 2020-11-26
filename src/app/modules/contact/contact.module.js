import {ContactController, ContactSuccessController} from './contact.contronller';

const ContactModule = angular.module('ContactModule', []);

ContactModule
    .component('contact', {
        templateUrl: 'views/contact.html',
        controller: ['$location', '$scope', ContactController]
    })
    .component('contactSuccess', {
        templateUrl: 'views/contact-success.html',
        controller: ['$location', '$scope', ContactSuccessController]
    });
