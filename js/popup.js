document.querySelector('#best_move_button').addEventListener('click', function(event)
{
  function callContent(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.runtime.sendMessage({greeting: "bestMove"} , response => {
        if(chrome.runtime.lastError) {
          console.log("eh oui")
          setTimeout(callContent, 1000);
        } else {
          // Do whatever you want, background script is ready now
        }
      });
    });
  }
  
  callContent()

});