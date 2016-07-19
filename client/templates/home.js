Template.home.events({
    'submit form': function(e) {
        e.preventDefault();
        var formData=$('#url').val();



        var captchaData = grecaptcha.getResponse();

        Meteor.call('formSubmissionMethod', formData, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();

            if (error) {
                console.log('There was an error: ' + error.reason);
            } else {
                console.log('Success!');
                //console.log(result[1]);
                  Session.set('written', true);
                  Session.set('result',result[1])

            }
        });
        // console.log(urldata);
        // console.log(formData.url);
        Session.set('url',formData);
        Session.set('generating',true);
        $('.generating').show();







    }

});


Template.home.helpers({
  written : function()
  {
    $('.generating').show();
    return Session.get('written');
  },
  value : function(){
    //console.log(Session.get('result'));

      $('.generating').hide();
    return Session.get('result');
  },
  path : function() {
    return Router.current().url;
  },
  clickfalse : function(){
    return Session.get('generating');
  }
});
















//
