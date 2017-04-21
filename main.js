SportsList = new Mongo.Collection('sports');
UserAccounts = new Mongo.Collection('users');

if(Meteor.isClient){
    console.log("Hello client");

    Template.name.events({
        'click': function(){
            console.log("You clicked something");
            var sportsList = ['David', 'Bob', 'Mary', 'Bill', 'Warren', 'Tim'];
            playersList.forEach(function(){
                console.log('test');
            });
        }
    });
    Template.body.events({
        'click .AddPlaceButton': function (e) {
            e.preventDefault();
            console.log("You pressed the button");
        }
    });

}


Template.name.player = function(){
    return "Some other text";
}