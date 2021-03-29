class Legend{
    constructor(canvas,fontSize){
        this.fontSize = (typeof fontSize !== 'undefined') ?  fontSize : 15;
        this.data = {};
        this.canvas = canvas;
        


    }

    add(element,color){
        this.data[element]=color;
    }


    updateLegend(){

        var fontMarginTop = 5;
        var fontMarginLeft = 5;

        console.log("k");
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        
        var context = canvas.getContext('2d');
        context.font = this.fontSize + "px Arial black";
        var maxTextLenght = -1;
        for(var key in this.data){
             maxTextLenght = Math.max(maxTextLenght,context.measureText(key).width);
        }
        
        
        var legendWidth  = maxTextLenght +  5*fontMarginLeft  + this.fontSize;
        var legendHeight = (this.fontSize + fontMarginTop) * Object.keys(this.data).length + fontMarginTop;
        console.log(this.data);
        

        
        
        context.beginPath();
        context.moveTo(canvasWidth,canvasHeight);
        context.lineTo(canvasWidth - legendWidth,canvasHeight);
        context.lineTo(canvasWidth - legendWidth,canvasHeight - legendHeight);
        context.lineTo(canvasWidth ,canvasHeight - legendHeight);
        context.fillStyle = 'white';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();
        
        
        context.fillStyle = 'black';
        var actualHeight = fontMarginTop + this.fontSize;


        


        for(var key in this.data){ 
            console.log(actualHeight);
            context.fillText(key,canvasWidth - legendWidth + fontMarginLeft,canvasHeight - legendHeight + actualHeight);
            context.beginPath();
            context.moveTo(canvasWidth - legendWidth + 4*fontMarginLeft + maxTextLenght,canvasHeight - legendHeight + actualHeight);
            context.lineTo(canvasWidth - legendWidth + 4*fontMarginLeft + maxTextLenght + this.fontSize,canvasHeight - legendHeight + actualHeight);
            context.lineTo(canvasWidth - legendWidth + 4*fontMarginLeft + maxTextLenght + this.fontSize,canvasHeight - legendHeight + actualHeight - this.fontSize);
            context.lineTo(canvasWidth - legendWidth + 4*fontMarginLeft + maxTextLenght,canvasHeight - legendHeight + actualHeight - this.fontSize);
            context.lineTo(canvasWidth - legendWidth + 4*fontMarginLeft + maxTextLenght,canvasHeight - legendHeight + actualHeight);
            context.fillStyle = this.data[key];
            context.fill();
            context.lineWidth = 1;
            context.fillStyle = "black";
            context.stroke();
            context.closePath();

            actualHeight+= fontMarginTop + this.fontSize;
        }

    }




}