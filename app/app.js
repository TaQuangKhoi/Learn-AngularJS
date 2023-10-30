// Define the `haoVanApp` module
var haoVanApp = angular.module('haoVanApp', []);

// Define the `PhoneListController` controller on the `haoVanApp` module
haoVanApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.name = 'Hảo Văn'

    // make a 2d array of number
    $scope.numbers = [];
    for (let i = 0; i < 10; i++) {
        $scope.numbers[i] = [];
        for (let j = 0; j < 10; j++) {
            $scope.numbers[i][j] = i * 10 + j;
        }
    }
    console.debug($scope.numbers)

    $scope.tableHeaders = [
        'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'
    ];

    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});