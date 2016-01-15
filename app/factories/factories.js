/**
 * Created by leonardogcsoares on 1/15/2016.
 */

providersApp.factory('providersFactory', function() {
    var factory = {};
    var providers = [
        {providerName: 't2.small', provider: 'aws',cpu: 1, ram: 6, disco: 30, price: 3.00, link: "http://blog.concretesolutions.com.br/wp-content/uploads/2014/01/AWS-225x205.jpg"},
        {providerName: 't4.big', provider: 'google', cpu: 2, ram: 2, disco: 120, price: 2.00, link: "http://www.icon2s.com/wp-content/uploads/2015/01/Chrome.png"},
        {providerName: 'hp.small', provider: 'hp', cpu: 5, ram: 1, disco: 200, price: 5.30, link: "data:image/png;base64,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"},
        {providerName: 'az.large', provider: 'azure', cpu: 10, ram: 3, disco: 80, price: 2.43, link: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAMAAAAI/LzAAAAASFBMVEX///9/ugDyUCIBpO//uQEAou/6xbv/5ba23vn/uwDyShIApvCBvADS5rbyUBj/5LP/9eMAqPDj8v396eXu9ePyQwDySwPzUhQHHnNYAAABE0lEQVR4nO3cOw7CQBBEQWDBgA02f+5/U6J1tEIiaBBSvQu0SpPPYiFJkj7s2oWqA8dQtwamu/eRHnVgGerYwvSrSGMdOMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD8HNPXgZCljXmMkZ7zZTI1MZIkJduVMgQq5zqwDzW1MJuSqQ6sQ22/iBnmy8DAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwPwnpvwGkyn+3aT1quWyC1UHpm2k6dTASJKkt70AZTRlgloKum4AAAAASUVORK5CYII="}
    ];

    factory.getProviders = function () {
        return providers;
    };

    return factory;

});