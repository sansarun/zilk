var movieNameTextbox = document.getElementById("movieName");

chrome.storage.sync.get(null, function(storage) {
    movieNameTextbox.value = storage.movieName;
});

movieNameTextbox.onchange = function() {
    chrome.storage.sync.set({
        'movieName': document.getElementById("movieName").value
    });
}
