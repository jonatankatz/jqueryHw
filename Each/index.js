divNumbers = { "1":"1", "2": "2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12" };


let button = $("#btn")
    button.on("click",function(){
        $.each(divNumbers, function( index, val ) {
   
            let text = val
            console.log(text)
            let i = index-1
            console.log(i)
            let b = $ (".boxing")[i]
         b.append(text); 
        
        });
    })
    
    

