var words = new Map();
var canvas;
var myDataFrame;
var myLegend;
var myCakePlot;

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

    if(!document.forms[0].checkbox.checked){
        words = new Map();
        myDataFrame.clear();
    }

    var str = document.forms[0].textarea.value;
    words = getWordsMap(str,words);
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""
    
    
    for (let [key, value] of words) {
        resultDiv.innerHTML+= key + ":" + value + "<br>"
        myDataFrame.add(key,parseInt(value));

    }
    
    
    
}


requirejs.config({
    baseUrl : '../../',
    bundles: {
        'modules': ['MyPlotLiblary', 'Legend','DataFrame','BarGraph']
    }
})

require(["Source/MyPlotLiblary"], function (MyPlotLiblary) {


    canvas = document.getElementById('canvas');
    myDataFrame = new MyPlotLiblary.DataFrame();
    myLegend = new  MyPlotLiblary.Legend();
    myCakePlot = new MyPlotLiblary.CakePlot(canvas,myDataFrame,myLegend);
});
document.forms[0].button.addEventListener("click",formFunc);
