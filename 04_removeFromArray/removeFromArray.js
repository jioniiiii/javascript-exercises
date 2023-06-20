const removeFromArray = function(arr,...num) {
    
     const arrNew=[];

     arr.forEach(item => { //calls a function for each element in an array 
        
        if(!num.includes(item)){ //runs only if item isnt in the num array 
            arrNew.push(item); //puts the values of the old array in a new one
            
        }});
        
     
     return arrNew;

};

// Do not edit below this line
module.exports = removeFromArray;
