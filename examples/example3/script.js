
requirejs.config({
    baseUrl : '../../',
    bundles: {
        'modules': ['MyPlotLiblary', 'Legend','DataFrame','BarGraph']
    }
})

require(["Source/MyPlotLiblary"], function (MyPlotLiblary) {


    canvas = document.getElementById('canvas');
    myDataFrame = new MyPlotLiblary.DataFrame();
    myDataFrame.add("f(x)",(x) => Math.sin(x))
    myLegend = new  MyPlotLiblary.Legend(canvas,20);
    myPlot = new MyPlotLiblary.LambdaFuncPlot( myDataFrame, myLegend ,-20,20,2000);
});

