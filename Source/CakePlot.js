define('Source/CakePlot', [],function(){

class CakePlot{
    constructor(canvas,dataFrame,legend){

        this.canvas = canvas;
        this.dataFrame = dataFrame;
        this.dataFrame.addObserver(this);
        this.legend = null;


        if(legend != undefined){
            this.legend = legend;
            this.haveLegend = true;
        }
        else{
            this.haveLegend = false;
        }
        
        this.updateContent();
    }

    updateContent(){
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        var width = canvas.width;
        var height = canvas.height;

        var data = this.dataFrame.values
        var sum = 0;
        for(var key in data){
            console.log(key,data[key])
            sum+=data[key];
        }

        var deg = (2*Math.PI)/sum;
        console.log(sum);
        var positionX = width/2;
        var positionY = height/2;
        var radius = Math.min(width/2-5,height/2-5);

        var actualRadius = 0

        for(var key in data){
        var positionY = height/2;
            
            var randomColor = Math.floor(Math.random()*16777215).toString(16);

            console.log(actualRadius,deg*data[key])
            context.beginPath();
            context.arc(positionX, positionY, radius, actualRadius,actualRadius + deg*data[key]);
            context.lineTo(positionX,positionY);
            context.closePath();

            

            context.fillStyle = '#' + randomColor;
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = "white";
            context.stroke();

            actualRadius+=deg*data[key];


            if(this.haveLegend){
                this.legend.add(key,'#' + randomColor);
            }
           
        }
        console.log(this.haveLegend);
        if(this.haveLegend){
            this.legend.updateLegend();
        }
    }


}
return{
    CakePlot:CakePlot
}


});