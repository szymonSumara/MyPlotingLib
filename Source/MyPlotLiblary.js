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
        fruits.forEach(function(item,index){

        });
    }

    add(element,amount = 1){
        if(this.dict[element] !== undefined )
            this.dict[element]+=amount;
        else
        this.dict[element] = amount;  
    }  

    get values(){
        return this.dict;
    }
}
