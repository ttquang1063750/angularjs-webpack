export const ContactController = ($location, $scope) => {
    $scope.sendMessage = () => {
        console.log($scope);
        $location.path('contact-success')
    }
};

export const ContactSuccessController = ($location, $scope) => {
    $scope.sendMessage = () => {
        console.log($scope);
        $location.path('contact-success')
    }
};
