var postCount = 0;
var movieName = null;

function main() {
    var postArray = document.querySelectorAll("[data-insertion-position]");
    if(postArray.length != postCount) {
        postCount = postArray.length;
        analysePosts(postArray);
    }
}

function analysePosts(postArray) {
    for(var i=0; i < postArray.length; i++) {
        var post = postArray[i];
        if(shouldCensor(post.innerHTML)) {
            censor(post);
        }
        else {
            uncensor(post);
        }
    }
}

function shouldCensor(message) {
    if(movieName === null){
        return false;
    }
    else {
        return message.toLowerCase().indexOf(movieName.toLowerCase()) !== -1;
    }
}

function censor(post) {
    post.childNodes[0].style.opacity = 0.1;
}

function uncensor(post) {
    post.childNodes[0].style.opacity = 1;
}

chrome.storage.sync.get(null, function(storage) {
    movieName = storage.movieName;
});
chrome.storage.onChanged.addListener(function(changes, namespace) {
    movieName = changes.movieName.newValue;
    postCount = 0;
});
setInterval(main, 500);
