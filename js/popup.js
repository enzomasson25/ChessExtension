$(document).ready(function(){ 
    $('#best_move_button').click(function(){
      console.log($('#color :selected').val())
      chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: "bestMove"});
      });
    });
});