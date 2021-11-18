function fullName(people){
return map(people,function(person) {
if(person.name.hasOwnProperty("middle")=== true){
return person.name.first+" "+person.name.middle+" " +person.name.last;
}
return person.name.first+" "+ person.name.last
})
}



 function abs(nums){
 	return map(nums,function(num){
     if(num<0){
     	return num*-1
     }
     return num
 		})

 } 




 function maximums (arrays){
return map(arrays,function(array){
return Math.max(...array)})
}


function exponentials(numbers) { 
return map(numbers,function(number){
return number**number})
 } 




 function reverse (string){
var array=[]
var bob=string.split(" ")
for (var i=0;i<bob.length;i++){
array.push(bob[i].split("").reverse().join("")
          ) }
return array.join(" ")
}



function pluck (people,string){
return map(people,function(person){
return person[string]
})
}


//day 2
function map (coll,f){
    var acc={}
    if (!Array.isArray(coll)){
    acc={}
    }
    each(coll,function (element,key){
    acc[key]=f(element,key)
         })
    return acc
    }

    //EX1
    function incrementValues(object){
        return map(object,function(element,i){
        return element=element+1})
        }

        //ex2
        function uppercaseValues (object){
            return map(object,function(element,i){
            if(typeof(element)==="string"){
            return element.toUpperCase()}
            return element 
            
            })
            }

            //ex3
            function countNestedKeys(object) { 
                return map(object,function(element,i){
                var res=0
                for (var key in element){
                res=res+1
                 } 
                return res 
                })
                 }
                 //ex4
                 function agesToMinutes(object){ 
                    return map ( object,function(element,i){
                    
                    for (var key in element){
                    if (element.hasOwnProperty("age")){
                    return element["age"]*360*24*60
                    }
                    }
                    })
                    }