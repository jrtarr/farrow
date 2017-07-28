app.controller('MainController', ['$scope', function($scope){
	$scope.artists = [
	{
		name: 'THE OUTLIERS',
		hometown: 'Nashville, TN',
		description: 'The Outliers have been on quite a year since they began in Nashville at the end of 2016. Made up of the duo of veteran performers and writers, Will Jackson & Jack Thomas, the group plays 5-6 shows a week in town in addition to traveling across the South and Midwest spreading their music and arrangements of popular classics. Fall 2017 will see them spread out and venture into new cities to visit more fans.',
		pic: 'img/livecolor.jpg'
	},
	{
		name: 'WILL JACKSON',
		hometown: 'Myrtle Beach, SC',
		description: 'Will Jackson has been a prominent figure in the busy tourist town of Myrtle Beach for many years. Starting as a high schooler, Will commanded crowds of fans with his unique ability to play multiple instruments seamlessly throughout his show. After attending Berklee College of Music, studying and perfecting his songwriting, Will settled in Nashville, TN where he has been busy working the crowds nightly as one half of the duo, The Outliers.',
		pic: 'img/will.jpg'
	},
	{
		name: 'JACK THOMAS',
		hometown: 'Fort Wayne, IN',
		description: 'Jack Thomas does the unique job of songwriting, singing, and playing drums. As a working musician in Nashville, Jack has been fortunate to have played with a number of artist\'s as a sideman; Cole Swindell, Brian McComas, Chas Collins, Georgia English, and others. Currently Jack writes and performs in Nashville as one half of the duo, The Outliers.',
		pic: 'img/jack.jpg'
	}
	];
}]);

