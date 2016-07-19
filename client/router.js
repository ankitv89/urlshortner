Router.route('/', function () {
  this.render('home');
});


Router.configure({
     layoutTemplate: 'layout'
});



Router.route('/:data', {
  template: 'loading',
  data: function(){
  var params = this.params; // { _id: "5" }
  var hook = params.data; // "5"
  Meteor.call("findurl", hook, function(error, result){
    if(error){
      console.log("error", error);
      Router.go('/');
    }
    if(result){
      console.log(result);

      window.location = result;

    }
  }
);}
});
