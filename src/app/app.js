import './modules/modules';

const ninjaApp = angular.module(
    'ninjaApp',
    [
        'ngRoute',
        'ngAnimate',
        'DirectoryModule',
        'ContactModule'
    ]
);

ninjaApp.config(['$routeProvider', '$locationProvider', 'customProviderProvider', ($routeProvider, $locationProvider, customProviderProvider) => {
    customProviderProvider.setValue('new Value');
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: [
                '$scope', 'customProvider', 'customFactory', 'customService',
                function ($scope, customProvider, customFactory, customService) {
                    customFactory.setName('change name of custom factory to Home');
                    console.log(customProvider, customFactory, customService);
                    $scope.getNinjas = () => {
                        return customFactory.getNinjas();
                    }
                }
            ]
        })
        .when('/contact', {
            template: '<contact></contact>',
        })
        .when('/contact-success', {
            template: '<contact-success></contact-success>',
        })
        .when('/directory', {
            template: '<directory></directory>',
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);


ninjaApp.run(() => {
    console.log('run')
});

ninjaApp.provider('customProvider', [function() {
    const config = {
        name: 'custom provider',
        value: 'initialized value'
    };

    this.setValue = (value) => {
        config.value = value;
    };

    this.$get = () => {
        return config
    }
}]);

class MyFactory {
    constructor() {
        this.name = 'custom factory';
        this.ninjas = [];
    }
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addNinja(ninja) {
       this.ninjas.push(ninja);
    }

    getNinjas() {
        return [...this.ninjas];
    }
}

ninjaApp.factory('customFactory', [() => {

    return new MyFactory();
}]);

ninjaApp.service('customService', [function () {
    return {
        name: 'custom service'
    }
}]);
