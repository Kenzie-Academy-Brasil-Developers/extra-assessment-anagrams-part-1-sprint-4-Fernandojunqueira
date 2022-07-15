const button = document.getElementById("findButton");
    button.addEventListener("click", function () {

    let typedText = document.getElementById("input").value;
    let paragraph = document.querySelector('p')
    paragraph.innerText = `[${getAnagramsOf(typedText)}]`;
    

});


function getAnagramsOf(word){

   let b = alphabetize(word)
   return listarPalavras(b)
   
  
}

function listarPalavras(arr){

    let array = []
    for( let i = 0; i < palavras.length; i++){

        if(arr === palavras[i].toLowerCase().split("").sort().join("").trim()) {

            array.push(palavras[i])
        }  
        
}

return array
}


function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
listarPalavras(palavras)

