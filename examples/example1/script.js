requirejs.config({
    baseUrl : '../../',
    bundles: {
        'modules': ['MyPlotLiblary', 'Legend','DataFrame','BarGraph']
    }
})



var canvas = document.getElementById('canvas');

require(["Source/MyPlotLiblary"], function (MyPlotLiblary) {
     var myDataFrame = new MyPlotLiblary.DataFrame();
     myDataFrame.add("Pepsi",50)
     myDataFrame.add("Cola",30)
     myDataFrame.add("Fanta",10)
     myDataFrame.add("reds",150)
     myDataFrame.add("orange juice ",120)

    var myLegend = new MyPlotLiblary.Legend(canvas,20);

    var myPlot  = new MyPlotLiblary.BarGraph(canvas, myDataFrame,myLegend);
})

