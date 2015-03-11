'use strict';

app.controller('PostCtrl', function($scope, Post, $location, Auth){
  // $scope.posts = [];
  // $scope.posts = Post.get();
  $scope.posts = Post.all;
  $scope.user = Auth.user;

  $scope.post = {url: 'http://', title: ''};

  // $scope.submitPost = function(){
  //   // $scope.posts.push($scope.post);
  //   $scope.post.creator = $scope.user.profile.username;
  //   $scope.post.creatorUID = $scope.user.uid;

  //   Post.create($scope.post).then(function(ref){
  //     $location.path('/posts/' + ref.name());
  //     $scope.post = {url: 'http://', title: ''};
  //   });
  // };

  $scope.deletePost = function(post){
    Post.delete(post);
  };

});