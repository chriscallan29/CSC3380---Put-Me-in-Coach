
Router.configure({
    layoutTemplate: 'main',

});

Router.route('/', function () {
    this.layout('main');
    this.render('home');
});

Router.route('/creatematch', function () {
    this.layout('main');
    this.render('creatematch');
});

Router.route('/findmatch', function () {
    this.layout('main');
    this.render('findmatch');
});

Router.route('/newsfeed', function () {
    this.layout('main');
    this.render('newsfeed');
});

Router.route('/profile', function () {
    this.layout('main');
    this.render('profile');
});