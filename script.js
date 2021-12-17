//DOM ELEMENTS
//var profile-photo???
var searchInput = document.getElementById('search-text');
var searchButton = document.getElementById('search-button');
var searchResults;

//var photo = document.getElementById('photo');
var avatar = document.getElementById('avatar');

var user = document.getElementById('user');
var joined = document.getElementById('joined');
var userName = document.getElementById('username');

var bio = document.getElementById('bio');

var repos_box = document.getElementById('repos-box');
var repos = document.getElementById('repo-number');
var followers = document.getElementById('followers-number');
var following = document.getElementById('following-number');

var userLocation = document.getElementById('user-location');
var twitter = document.getElementById('twitter');
var website = document.getElementById('website');
var company = document.getElementById('company');

var userData;

var light_dark = document.getElementById('light-dark');
var header = document.getElementById('header');

//EVENT LISTENERS
searchButton.addEventListener('click', function(e){
    searchResults = searchInput.value;
    //console.log('Search Input: '+ searchResults);
    requestUserRepos(searchResults);
});

searchInput.addEventListener('click', function(){
    searchInput.value = '';
})



//API Call
function requestUserRepos(username){
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}`;
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        //userData = data;
        // Log the response
        console.log(data.avatar_url);

        //Update profile data
        avatar.src= data.avatar_url;

        user.innerText = data.name;

        var joinedmsg = "Joined ";
        joinedmsg += data.created_at;//fix date format
        joined.innerText= joinedmsg;

        userName.innerText = "@"+data.login; //WHY IS THIS NOT WORKING????

        if (data.bio == null){
            bio.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. ";
        } else{
            bio.innerText = data.bio;
        }
        repos.innerText = data.public_repos;
        followers.innerText = data.followers;
        following.innerText = data.following;

        var locationImg = '<img src="/assets/icon-location.svg"alt="">\n ';
        userLocation.innerHTML=locationImg+data.location;

        var websiteImg= '<img src="/assets/icon-website.svg"alt="">\n ';
        website.innerHTML= websiteImg+data.blog;
        
        var twitterImg= '<img src="/assets/icon-twitter.svg"alt="">\n ';
        twitter.innerHTML=twitterImg+ data.twitter_username;

        var companyImg= '<img src="/assets/icon-company.svg"alt="">\n ';
        company.innerHTML= companyImg+data.company;
    }
    // Send the request to the server
    xhr.send();
}
// Call function passing in 'facebook' as GitHub username


//LIGHT-DARK BUTTON

light_dark.addEventListener('click', lightButton);

function lightButton (){
    console.log('lightDark clicked');
    if (light_dark.className == 'light-button'){
        light_dark.className = 'dark-button';
        light_dark.value = 'LIGHT'
        darkMode();
    }else{
        light_dark.className ="dark-button";
        light_dark.className = 'light-button';
        light_dark.value = 'DARK';
        lightMode();
    }
}

//LIGHT-DARK MODE
//light_dark.addEventListender('click', darkMode);

function darkMode(){
    var container= document.getElementById('container');
    var devfinder = document.getElementById('devfinder');
    var searchbox = document.getElementById('searchbox');
    var profile = document.getElementById('profile');
    

    container.classList.add('dark');
    devfinder.classList.add('dark');
    light_dark.classList.add('dark');
    searchbox.classList.add('dark');
    searchInput.classList.add('dark');
    profile.classList.add('dark');
    repos_box.classList.add('dark');
    user.classList.add('dark');
    repos.classList.add('dark');
    followers.classList.add('dark');
    following.classList.add('dark');
}

function lightMode(){
    container.classList.remove('dark');
    devfinder.classList.remove('dark');
    light_dark.classList.remove('dark');
    searchbox.classList.remove('dark');
    searchInput.classList.remove('dark');
    profile.classList.remove('dark');
    repos_box.classList.remove('dark');
    user.classList.remove('dark');
    repos.classList.remove('dark');
    followers.classList.remove('dark');
    following.classList.remove('dark');
}













