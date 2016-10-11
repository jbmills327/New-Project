angular.module("myApp")
    .controller("MainCtrl", mainController);


angular.module("myApp")
    .config(myRouter);

myRouter.$inject = ["$routeProvider"];

function myRouter($routeProvider) {
    $routeProvider
        .when("/level1", {
            templateUrl: "./templates/fantasy/level1.html"
        })
        .when("/level2", {
            templateUrl: "./templates/level2.html"
        })
        .when("/level3", {
            templateUrl: "./templates/level3.html"
        })
        .when(".level4", {
            templateUrl: "./templates/level4.html"
        })

}

function mainController() {
    var main = this;


    main.newUserList = JSON.parse(window.localStorage.getItem("users")) || [];
    main.newUsers = {}

    var User = function(name, age) {
        this.name = main.name;
        this.age = main.age;
    }

    main.addAUser = function() {
        main.newUsers = new User(main.name, main.age);
        main.newUserList.push(main.newUsers);
        $("#myModal").modal("hide");
        main.newUsers = {};
        window.localStorage.setItem("users", JSON.stringify(main.newUserList));
        main.greeting = "Hello " + main.name + ", are you ready for an adventure?";
        console.log(main.newUserList);
    }
}
