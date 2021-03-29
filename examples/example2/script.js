var words = new Map();


function getWordsMap( text,wordsMap){
    var splitedStr = text.split(' ');
    splitedStr.forEach(function(element) {
        if(words.has(element)){
            words.set(element,words.get(element) + 1);
        }
        else{
            words.set(element,1);  
        }
    });

    return wordsMap;
} 

function getSpecyficLenghtWordsCount(text,wordSize){
    var numberOfSpecyficLenWords = 0;
    var splitedStr = text.split(' ');
    splitedStr.forEach(function(element) {
            if(element.length == wordSize){
                numberOfSpecyficLenWords+=1;
            }
        
    });
    return numberOfSpecyficLenWords;
}

function formFunc(){

    var canvas = document.getElementById('canvas');
    var myDataFrame = new DataFrame();
    

    

    if(!document.forms[0].checkbox.checked){
        words = new Map();
    }

    // var wordSize;
    // if((wordSize = prompt("podaj długość wyrazów")) == String){
    //     if(isNaN(string)){
    //         wordSize = parseInt(wordSize);
    //     }
    // }



    var str = document.forms[0].textarea.value;
    words = getWordsMap(str,words);
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""
    
    // if( !isNaN( wordSize)){
    //     resultDiv.innerHTML = "Wyraz o podanej długości wystąpił " + getSpecyficLenghtWordsCount(str,wordSize) + "razy.<br>"
    // }
    
    for (let [key, value] of words) {
        resultDiv.innerHTML+= key + ":" + value + "<br>"
        myDataFrame.add(key,parseInt(value));

    }

    var myCakePlot = new CakePlot(canvas,myDataFrame,true);
}

document.forms[0].button.addEventListener("click",formFunc);
