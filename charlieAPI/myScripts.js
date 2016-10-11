angular.module("pokeApp", [])
    .controller("PokeCtrl", pokeController);




pokeController.$inject = ["$http"];

function pokeController($http) {

    var poke = this;

    poke.text = "Hello Squirrels!";

    poke.getMyPokemon = function() {
        $http.get("http://pokeapi.co/api/v1/pokemon/" + poke.myData.num)
            .then(function(res, status) {
                poke.myData = res.data;
                console.log("Success: ", res);
            }, function(res, status) {
                console.log("Error: ", status);

            });

    }

    // poke.getPokemon = function() {
    //     $http.get("http://pokeapi.co/api/v1/pokemon/3")
    //         .then(function(res, status) {
    //             poke.myData = res.data;
    //             console.log("Success: ", res);
    //         }, function(res, status) {
    //             console.log("Error: ", status);
    //
    //         });
    //
    // }

    // poke.getPokemon($http);
}
