$(document).ready(function(){ 
    $('#best_move_button').click(function(){
      chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: "bestMove"});
      });
    });
});