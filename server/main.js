import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if(Meteor.isServer){
        console.log("Hello server");
        Router.route('Home', {path: '/'});
        Router.route('CreateMatch', {path: '/CreateMatch'});
        Router.route('FindMatch', {path: '/FindMatch'});
        Router.route('ViewProfile', {path: '/ViewProfile'});

    }


});
