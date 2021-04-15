define('Source/LambdaFuncPlot', [],function(){

    class LambdaFuncPlot{
        constructor(myDataFrame,legend,start,end,steps){
            
            start = (typeof start !== 'undefined') ?  start : -1;
            end = (typeof end !== 'undefined') ?  end : 1;
            steps = (typeof steps !== 'undefined') ?  steps : 100;


            this.dataFrame = myDataFrame
    
            this.range = [];
            var h = (end - start)/steps
            for(var i = 0;i <= steps; i += 1){
                this.range.push(start + i*h);
            } 
            this.canvas = canvas;

            
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
            var margin = 30;
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            var width = canvas.width;
            var height = canvas.height;



            var data = this.dataFrame.values
            console.log(data);
            var maxValue = -Infinity;
            var minValue = Infinity;
            console.log(this.range)
            for(var key in data){

                

            for(var x in this.range){
                console.log(key, this.range[x],data[key](this.range[x]))
                    maxValue = Math.max(maxValue,data[key](this.range[x]));
                    minValue = Math.min(minValue,data[key](this.range[x]));
            }
            }

            console.log(maxValue,minValue)

            var toPxScalarY =  (height - 2*margin)/(maxValue - minValue);
            var toPxScalarX =  (width - 2*margin)/(this.range[this.range.length - 1] - this.range[0])
            console.log(toPxScalarY,toPxScalarX,this.range[this.range.length - 1],this.range[this.range.length - 1]);
            
            var step=0.1;

            while((maxValue - minValue)/step > 50){
                step*=10;
                console.log(step)
            }

            
            for(var i = -10 ; i*step <= maxValue;i+=1){
                context.beginPath();
                context.moveTo(margin ,- margin + height -i * step*toPxScalarY + minValue*toPxScalarY);
                context.lineTo(width - margin,- margin + height -i * step*toPxScalarY + minValue*toPxScalarY); 
                context.fillText(i*step,5,- margin + height -i * step*toPxScalarY + minValue*toPxScalarY);
                console.log("a ",width - margin,- margin + height -i * step*toPxScalarY); 
                context.lineWidth = 1;
                context.strokeStyle = "gray";
                context.stroke();
            }

            for(var key in data){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                context.beginPath();
                var wasPathStarted = false;
                for( var x in this.range){
                    console.log(key, x,data[key](this.range[x]))
                    if(wasPathStarted)
                        context.lineTo(margin + (this.range[x] - this.range[0])*toPxScalarX,- margin + height - data[key](this.range[x])*toPxScalarY + minValue*toPxScalarY);    
                    else{
                        context.moveTo(margin + (this.range[x] - this.range[0])*toPxScalarX,- margin + height - data[key](this.range[x])*toPxScalarY + minValue*toPxScalarY); ;
                        wasPathStarted = true;
                    }

                    //console.log(margin + x*toPxScalarX,- margin + height - data[key](x)*toPxScalarY);

                }
            
                context.lineWidth = 5;
                context.strokeStyle = "#" + randomColor;
                context.stroke();

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
        LambdaFuncPlot:LambdaFuncPlot
    }


});