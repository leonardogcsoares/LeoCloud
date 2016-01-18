//describe("A suite of text for the index.html page", function() {
//
//    var $httpBackend,
//        $scope,
//        callback;
//
//    beforeEach(module('providersApp'));
//
//    beforeEach(inject(function (_$httpBackend_, $rootScope) {
//        $httpBackend = _$httpBackend_;
//        $scope = $rootScope.$new();
//    }));
//
//    afterEach(function () {
//        $httpBackend.verifyNoOutstandingExpectation();
//        $httpBackend.verifyNoOutstandingRequest();
//    });
//
//    it("Should return a list of Providers from the server", inject(function (providersGetFactory) {
//        $httpBackend.when('GET', '/providers').respond(200,
//            [{
//                "id": 5,
//                "providerName": "t2.small",
//                "provider": "aws",
//                "cpu": 2,
//                "ram": 20,
//                "disco": 300,
//                "price": 0.2223
//            },
//                {
//                    "id": 8,
//                    "providerName": "hp-2",
//                    "provider": "google",
//                    "cpu": 1,
//                    "ram": 100,
//                    "disco": 200,
//                    "price": 0.554
//                }]);
//
//        //var providers = providersGetFactory.getProvidersFromDb($scope, $httpBackend, callback);
//        //
//        //expect(providers.length).toBe(0);
//        //
//        //$httpBackend.flush();
//        //
//        //expect(providers.length).toBe(2);
//
//    }));
//});

describe('ProvidersController', function () {

    var $httpBackend, $rootScope, createController, providersListHandler, providersGetFactory;

    beforeEach(module('providersApp'));
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        //providersGetFactory = $injector.get('providersGetFactory');

        providersListHandler = $httpBackend.when('GET', '/providers/').respond(
            [{
                "id": 5,
                "providerName": "t2.small",
                "provider": "aws",
                "cpu": 2,
                "ram": 20,
                "disco": 300,
                "price": 0.2223
            },
            {
                "id": 8,
                "providerName": "hp-2",
                "provider": "google",
                "cpu": 1,
                "ram": 100,
                "disco": 200,
                "price": 0.554
            }]
        );

        $rootScope = $injector.get('$rootScope');

        var $controller = $injector.get('$controller');

        createController = function () {
            return $controller('ProvidersController', {'$scope': $rootScope});
        };

    }));

    afterEach(function() {
        //$httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.verifyNoOutstandingRequest();
    });

    it('should retrieve empty list of providers', function () {

        providersListHandler.respond(401, '');
        var controller = createController();
        $httpBackend.flush();
    });


});