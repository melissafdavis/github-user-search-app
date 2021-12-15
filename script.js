//DOM ELEMENTS
//var profile-photo???
var photo = document.getElementById('photo');
var user = document.getElementById('user');
var joined = document.getElementById('joined');
var username = document.getElementById('username');
var bio = document.getElementById('bio');
var repos = document.getElementById('repo-number');
var followers = document.getElementById('followers-number');
var following = document.getElementById('following-number');
var userLocation = document.getElementById('user-location');
var twitter = document.getElementById('twitter');
var website = document.getElementById('website');
var company = document.getElementById('company');


//API Call


//UPDATE PROFILE
user.innerText = "MelissaDavis";

var joinedmsg = "Joined ";
joinedmsg += " March 5"
joined.innerText= joinedmsg;

username.innerText= "@melissadavis";

bio.innerText = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";

repos.innerText = 14;
followers.innerText = 149;
following.innerText = 252;

var locationImg = '<img src="/assets/icon-location.svg"alt="">\n ';
var city = 'Brattleboro, VT';
userLocation.innerHTML=locationImg+city;

var twitterImg= '<img src="/assets/icon-twitter.svg"alt="">\n ';
var twitterHandle = '@melissadavis';
twitter.innerHTML=twitterImg+twitterHandle;

var websiteImg= '<img src="/assets/icon-website.svg"alt="">\n ';
var websiteName = 'www.melissafloresdavis.com';
website.innerHTML= websiteImg+websiteName;

var companyImg= '<img src="/assets/icon-company.svg"alt="">\n ';
var companyName = 'Scissortail Creative';
company.innerHTML= companyImg+companyName;