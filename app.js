/**
 * Created by Dhruv on 5/20/16.
 */
'use strict'
angular.module("flicks", [])

    .controller("main", function($scope, movieService){

        $scope.title = "Movies"
        $scope.promo = "Now Playing"



        movieService.getMovies(function(response){


            $scope.movies = response.data;




        })


        $scope.test = function() {


        }


    })

    .service("movieService", function($http){

        this.getMovies = function(callback){
            $http.get("movies.json").then(callback)
        }

    });

