define(["Source/BarGraph","Source/CakePlot",'Source/LambdaFuncPlot',"Source/Legend"], function(BarGraph,CakePlot,LambdaFuncPlot,Legend) {

    class DataFrame{
        constructor(){
            this.dict = {};
            this.observers = [];
        }
        
        addObserver(observer){
            this.observers.push(observer);
        }
    
        removeObserver(observer){
            const index = array.indexOf(5);
            if (index > -1) {
                array.splice(index, 1);
            }
        }
    
        
        notifyObservers(){

            this.observers.forEach(function(item){

                item.updateContent();
            });
        }

        add(element,amount = 1){
            console.log(element,amount);
            if(this.dict[element] !== undefined )
                this.dict[element]+=amount;
            else
            this.dict[element] = amount;
            this.notifyObservers();  
        }  
    
        get values(){
            return this.dict;
        }

        clear(){
            this.dict = {}
        }

    };


    return {
        DataFrame: DataFrame,
        BarGraph:BarGraph.BarGraph,
        CakePlot:CakePlot.CakePlot,
        LambdaFuncPlot:LambdaFuncPlot.LambdaFuncPlot,
        Legend:Legend.Legend
    };
});
