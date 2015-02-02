var postCount = 0;

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
    }
}

function shouldCensor(message) {
    return true;
}

function censor(post) {
    post.childNodes[0].style.opacity = 0.1;
}

setInterval(main, 500);
