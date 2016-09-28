var friendData = require('../data/friends.js');
var path = require('path');

app.post('/api/friends', function(req, res){

var greatMatch = {
	name: "",
	image: "",
	matchDifference: 1000
	};
var usrData = req.body;
var usrName = usrData.name;
var usrImage = usrData.image;
var usrScores = usrData.scores;
var totalDifference = 0;


for (var i = 0; i < friends[i].length; i++) {
	console.log(freinds[i].name);
};