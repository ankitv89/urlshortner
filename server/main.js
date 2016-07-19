import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
    });
});
