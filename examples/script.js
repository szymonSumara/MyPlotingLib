

var canvas = document.getElementById('canvas');
var myDataFrame = new DataFrame();
myDataFrame.add("pepsi",40);
myDataFrame.add("cola",60);
myDataFrame.add("mirinda",30)

var myCakePlot = new CakePlot(canvas,myDataFrame,true);