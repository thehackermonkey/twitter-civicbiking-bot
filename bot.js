//load twit library and configuration file
var Twit = require('twit'),
		config = require('./config'),
		T = new Twit(config);
// my search object
var search =
{
	q: 'ciclistas OR cicloestacion OR mibici OR bici OR bicicleta OR ciclismo from:Trafico_ZMG',
	result_type: 'recent',
	count: 300
};

// get request from twitter api
T.get('search/tweets', search, gotData);

// callback function
function gotData(err, data, response) {
	if(err){
		//notify me if ther's an error
		console.log('something bad happened');
	}
	else{
		//get only the text  and date of the tweet
		var tweets = data.statuses;
		for(i=0; i<tweets.length; i++){
			console.log( tweets[i].text , tweets[i].created_at);
		}
	}
};
