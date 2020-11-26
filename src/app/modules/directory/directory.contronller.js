export const DirectoryController = ($http, $scope, customFactory) => {
    customFactory.setName('change name of custom factory to Directory');
    console.log(customFactory);
    $scope.newNinja = {};
    $scope.orderBy = '-name';
    $scope.search = '';
    $scope.ninjas = [];

    $scope.dir = (dir) => {
        if (dir >= 0) {
            $scope.orderBy = 'name';
        } else {
            $scope.orderBy = '-name';
        }
    };

    $scope.removeItem = (event, ninja) => {
        event.preventDefault();
        $scope.ninjas = $scope.ninjas.filter(name => name.name !== ninja.name)
    };

    $scope.addNinja = () => {
        $scope.ninjas.push({...$scope.newNinja, img: 'https://picsum.photos/20'});
        $scope.newNinja = {};
        customFactory.addNinja( $scope.ninjas[$scope.ninjas.length - 1]);
    };

    $scope.removeAll = (event) => {
        event.preventDefault();
        $scope.ninjas = [];
    };

    $http.get('assets/ninjas.json')
        .then(res => {
            $scope.ninjas = res.data.ninjas;
        })
};
