'use strict';

app.factory('Post', function($firebase, FIREBASE_URL){
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();
  // return $resource('https://db-reddit.firebaseIO.com/posts/:id.json');

  var Post = {
    all: posts,
    create: function(post){
      return posts.$add(post).then(function(postRef){
        $firebase(ref.child('user_posts').child(post.creatorUID))
                            .$push(postRef.name());
        return postRef;
      });
    },
    get: function(postId){
      return $firebase(ref.child('posts').child(postId)).$asObject();
    },
    comments: function(postId){
      return $firebase(ref.child('comments').child(postId)).$asArray();
    },
    delete: function(post){
      return posts.$remove(post);
    }
  };

  return Post;
  
});