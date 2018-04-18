require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var request = require("request");
var arg1 = process.argv[2];
var arg2 = process.argv[3];
function getMovie() {
    if (arg1 === 'movie-this') {
        var movieTitle = arg2
        request("http://www.omdbapi.com/?t=" + arg2 + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

            if (!error && response.statusCode === 200) {


                console.log("The movie's rating is: " + JSON.parse(body));
            }
        });
    }
}
getMovie();

function getSong(){
    if(arg1 ==='spotify-this-song'){
        var songName = arg2
        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data); 
          });
    }
}
getSong();



