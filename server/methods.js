Meteor.methods({
    formSubmissionMethod: function(formData, captchaData) {

        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);

        if (!verifyCaptchaResponse.success) {
          //  console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } else
          //  console.log('reCAPTCHA verification passed!');


       console.log(formData);
       var a = Meteor.call('randomString',8,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
       while (URLS.find({hook:a}).count()!=0)
       {
         a = Meteor.call('randomString',8,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
         console.log('Duplicate generated...Regenerating');
       }

       URLS.insert({url:formData, hook: a});
    //   console.log('captcha');

       //Session.set('hook',a);

        return [true,a];
    },
    randomString: function(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  },
    urlshort  : function(urldata){
      var a = Meteor.call('randomString',6,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

      URLS.insert({url:urldata, hook: a});
      //console.log(a);

      //Session.set('hook',a);
      return a;
      //console.log(URLS.find().fetch());
    },

showshort: function(url)

{
  //console.log('called');
    var z= URLS.find({url: url},{limit:1}).fetch()[0].hook;
//    console.log(z);
    return z;
},
findurl: function(hook)

{
//  console.log('called');
    var z= URLS.find({hook: hook},{limit:1}).fetch()[0].url;
  //  console.log(z);
    return z;
}
});


Router.route('/', function () {
  this.render('home');
});
