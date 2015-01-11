var wrapperList = document.querySelectorAll(".userContentWrapper");

for(var i=0; i < wrapperList.length; i++) {
    var wrapper = wrapperList[i];
    
    try{
        var userContent = wrapper.getElementsByClassName("userContent")[0];
        var message = userContent.firstChild.innerHTML;

        if(shouldCensor(message)) {
            censor(wrapper);
        }
    } catch(e) {
        console.error(e);
    }
}

function shouldCensor(message) {
    return true;
}

function censor(element) {
    element.style.opacity = 0.1;
}
