function main() {
    var postArray = document.querySelectorAll("[data-insertion-position]");

    for(var i=0; i < postArray.length; i++) {
        var post = postArray[i];

        if(shouldCensor(post.innerHTML)) {
            censor(post.childNodes[0]);
        }
    }
} 

function shouldCensor(message) {
    return true;
}

function censor(element) {
    element.style.opacity = 0.1;
}

setInterval(main, 1000);
