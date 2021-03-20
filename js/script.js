
console.log('content script ready')

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request.message == "bestMove"){
            bestMove()
        }
   });

function bestMove(){
    
    var board = document.getElementById('board-board')
    var pieces = board.getElementsByTagName('div')
    var nbPieces = pieces.length
    var listesPieces = []
    for (let i = 0; i < nbPieces; i++){
        listesPieces.push(trimPiece(pieces.item(i).className))
    }
    console.log("oui")
    
    alert(listesPieces)

}


function trimPiece(classPiece){
    classPiece = classPiece.replace('piece ','');
    classPiece = classPiece.replace(' square-','');
    
    couleur = classPiece.charAt(0)
    type = classPiece.charAt(1)
    colonne = classPiece.charAt(2)
    ligne = classPiece.charAt(3)

    if (couleur=='w'){
        type = type.toUpperCase()
    }

    let colonneLettre
    if (colonne==1) {
        colonneLettre = 'a'
    }else if (colonne==2) {
        colonneLettre = 'b'
    }else if (colonne==3) {
        colonneLettre = 'c'
    }else if (colonne==4) {
        colonneLettre = 'd'
    }else if (colonne==5) {
        colonneLettre = 'e'
    }else if (colonne==6) {
        colonneLettre = 'f'
    }else if (colonne==7) {
        colonneLettre = 'g'
    }else if (colonne==8) {
        colonneLettre = 'h'
    }
    
    return (type + colonneLettre + ligne)
}