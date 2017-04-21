import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if(Meteor.isServer){
        console.log("Hello server");

    }


});

Router.route('/');
Router.route('creatematch', {path: '/creatematch'});
Router.route('findmatch', {path: '/findmatch'});
Router.route('profile', {path: '/profile'});
Router.route('newsfeed', {path: '/newsfeed'});
