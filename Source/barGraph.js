class barGraph{
    constructor(canvas,dataFrame,withLegend){
        withLegend = (typeof withLegend !== 'undefined') ?  withLegend : false;

        this.canvas = canvas;
        this.dataFrame = dataFrame;
        this.dataFrame.addObserver(this);
        this.haveLegend = withLegend;
        this.legend = null;


        if(withLegend){
            this.legend = new Legend(this.canvas,30);
        }
        
        this.updateContent();
    }

    updateContent(){
        var context = canvas.getContext('2d');
        var collMargin = 10;
        var margin = 30;
        var width = canvas.width;
        var height = canvas.height;

        var data = this.dataFrame.values
        
        var maxValue = -Infinity;
        //var minValue = Infinity;
        
        for(var key in data){

            maxValue = Math.max(maxValue,data[key]);
           //Math.min(minValue,data[key]);
        }

        var dataValueToPx = (height - 2*margin)*1.0/maxValue;
        var collWidth = (width - margin)/Object.keys(data).length - 2*collMargin;
        console.log(collWidth);
        
        var step = 0.001;
        var minValue = 0;
        while((maxValue - minValue)/step > 50){
            step*=10;
        }

       
        for(var i = -10 ; i*step <= maxValue;i+=1){
            context.beginPath();
            context.moveTo(margin ,- margin + height -i * step*dataValueToPx + minValue*dataValueToPx);
            context.lineTo(width - margin,- margin + height -i * step*dataValueToPx + minValue*dataValueToPx); 
            context.fillText(i*step,5,- margin + height -i * step*dataValueToPx + minValue*dataValueToPx);
            console.log("a ",width - margin,- margin + height -i * step*dataValueToPx); 
            context.lineWidth = 1;
            context.strokeStyle = "gray";
            context.stroke();
        }

        var actualPosition = margin;
        for(var key in data){
        var positionY = height/2;
  
            
            context.beginPath();
            context.moveTo(actualPosition + collMargin ,height-margin);
            context.lineTo(actualPosition + collMargin,height - margin - data[key]*dataValueToPx);
            context.lineTo(actualPosition + collWidth - collMargin,height - margin - data[key]*dataValueToPx);
            context.lineTo(actualPosition + collWidth - collMargin,height - margin );
            context.closePath();

            var randomColor = Math.floor(Math.random()*16777215).toString(16);

            context.fillStyle = '#' + randomColor;
            context.fill();
            

            context.lineWidth = 1;
            context.strokeStyle = "gray";
            context.stroke();

            actualPosition+=collWidth;

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
