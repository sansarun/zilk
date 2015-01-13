function main() {
    var wrapperList = document.querySelectorAll(".userContentWrapper");

    for(var i=0; i < wrapperList.length; i++) {
        var wrapper = wrapperList[i];
        
        try{
            var message = wrapper.innerHTML;

            if(shouldCensor(message)) {
                censor(wrapper);
            }
        } catch(e) {
            console.error(e);
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