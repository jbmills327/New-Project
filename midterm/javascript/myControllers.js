angular.module("myApp")
    .controller("MainCtrl", mainController);

// This is my router for the ng-view on the fantasy html
angular.module("myApp")
    .config(myRouter);

// injecting the router
myRouter.$inject = ["$routeProvider"];


// This is the function that controls where we hop during the routing process
function myRouter($routeProvider) {
    $routeProvider
        .when("/level1", {
            templateUrl: "./templates/fantasy/level1.html"
        })
        .when("/level2", {
            templateUrl: "./templates/fantasy/level2.html"
        })
        .when("/level3", {
            templateUrl: "./templates/fantasy/level3.html"
        })
        .when("/level4", {
            templateUrl: "./templates/fantasy/level4.html"
        })


}
// Main Controller
function mainController() {
    var main = this;

    // This is the array that will hold the new users, currently is set to save data in local storage
    main.newUserList = JSON.parse(window.localStorage.getItem("users")) || [];
    // Empty new user object
    main.newUsers = {}
        // Creating the User class
    var User = function(name, age) {
            this.name = main.name;
            this.age = main.age;
        }
        // This is the function that creates new Users
    main.addAUser = function() {
            main.newUsers = new User(main.name, main.age);
            main.newUserList.push(main.newUsers);
            $("#myModal").modal("hide");
            main.newUsers = {};
            window.localStorage.setItem("users", JSON.stringify(main.newUserList));
            console.log(main.newUserList);
            main.greeting = "Hello " + main.name + ", are you ready for an adventure?";

        }
        // This is used to show and hide Goblin Quest book
    main.showGoblinQuest = false;
    // This is used to hide all the thumbnails, will need to be included on all "back" buttons
    main.hideLevelOneThumbs = false;




    main.heresTheGoblin = function() {
        console.log("This is working");
        main.showGoblinQuest = !main.showGoblinQuest;
        main.hideLevelOneThumbs = !main.hideLevelOneThumbs;
    }
}
