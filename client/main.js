import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',

    });
});
