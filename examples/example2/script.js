requirejs.config({
    baseUrl : '../../',

})

var canvas = document.getElementById('canvas');

require(["Source/MyPlotLiblary"], function (MyPlotLiblary) {
     var myDataFrame = new MyPlotLiblary.DataFrame();
     myDataFrame.add("a",50)
     myDataFrame.add("b",30)
     myDataFrame.add("c",10)
     myDataFrame.add("d",150)
     myDataFrame.add("e",120)

    var myLegend = new MyPlotLiblary.Legend(canvas,20);

    var myPlot  = new MyPlotLiblary.BarGraph(canvas, myDataFrame,myLegend);
})

