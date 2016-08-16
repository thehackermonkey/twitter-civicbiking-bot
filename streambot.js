//require twit library
var Twit = require('twit'),
	config = require('./config'),
	readCSV = require('nodecsv').readCSV,
	writeCSV = require('nodecsv').writeCSV,
	appendCSV = require('nodecsv').appendCSV,
	moment = require('moment'),
	T = new Twit(config);
// search for the following
var query = {
  //follow: '263809798'// @trafico_zmg twitter ID's => 263809798
  // follow: '236640161' //ID for testing @regenhans

  track: 'jabatas'
  // (you can find the id of a twitter account here : https://tweeterid.com/)
}

// init stream
var stream = T.stream('statuses/filter', query)
//var stream = T.stream('user')
//var stream = T.stream('statuses/sample')

//The keywords I'm going to look for on the tweets from this user
//var keywords = ['bici','bicicleta' ,' ciclista', 'ciclo estación']
//testing keywords
//var keywords = ['hola', 'hello', 'mono']

//show me tweets every time the user creates a tweet with one of the keywords

var filteredTweet;

moment.locale('es');

stream.on('tweet', function (tweet) {
//   for (var i = 0; i < keywords.length; i++) {
//       if(tweet.text.indexOf(keywords[i]) != -1){
//         var filteredTweet = tweet.text;
//         console.log(filteredTweet);
//
//         break; //end loop if at least one word match
//       }
// }

	var tweeText = tweet.text ,
		createdAt = moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a'),
		user = weet.user.screen_name;

	var datacsv = [[createdAt, user, tweeText]];

	console.log(datacsv);

	appendCSV(datacsv, './csv/tweets.csv', function(error){
	    if (!error) {
	      console.log('eureka');
	    }
	    else {
	      console.log('shit');
	    }
	});

	console.log(tweeText)
	console.log(user)

	var username = ' @' + user,
		status = {
			status: 'Ayúdanos a tener más información sobre el incidente llenando el siguiente formulario https://goo.gl/forms/LV0kgAu0vxf8Rodv2 ' + username
		}

	T.post('statuses/update', status, function(err, data, response) {
	  if(!err){
		  console.log('done');
	  }
	  else{
		  console.log('something went wrong:' + err);
	  }
	})

});
