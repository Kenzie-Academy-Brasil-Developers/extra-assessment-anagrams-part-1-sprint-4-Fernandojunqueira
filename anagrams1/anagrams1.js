const button = document.getElementById("findButton");
    button.addEventListener("click", function () {

    let typedText = document.getElementById("input").value;
    console.log(typedText)
    getAnagramsOf(typedText);

    console.log('oi')
});

function getAnagramsOf(palavras){

    for(let i = 0; i < palavras.length; i++ ){

        let teste = palavras[i]
    }
};
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
