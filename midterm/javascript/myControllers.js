angular.module("myApp")
    .controller("MainCtrl", mainController);


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