
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

Router.route('/creatematch/baseball', function () {
    this.layout('main');
    this.render('baseball');

});

Router.route('/creatematch/football', function () {
    this.layout('main');
    this.render('football');
});

Router.route('/creatematch/gym', function () {
    this.layout('main');
    this.render('gym');
});

Router.route('/creatematch/running', function () {
    this.layout('main');
    this.render('running');
});

Router.route('/creatematch/soccer', function () {
    this.layout('main');
    this.render('soccer');
});

Router.route('/creatematch/tennis', function () {
    this.layout('main');
    this.render('tennis');
});

Router.route('/creatematch/basketball', function () {
    this.layout('main');
    this.render('basketball');
});
