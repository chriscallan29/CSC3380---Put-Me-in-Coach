UserAccounts = new Mongo.Collection('users');

if(Meteor.isClient){
    console.log("Hello client");

    Router.configure({
        layoutTemplate: 'main',
    });
    Router.route('/', function () {
        this.render('Home');
    });

    Router.route('/CreateMatch', function () {
        this.render('CreateMatch');

    });

    Router.route('/FindMatch', function () {
        this.render('FindMatch');
    });

    Router.route('/ViewProfile', function () {
        this.render('ViewProfile');
    });

    Router.route('/NewsFeed', function () {
        this.render('NewsFeed');
    });


    }




