
    document.onkeypress= (e)=> {
        try{
            console.log(e.key)
            let elementReference
            elementReference=  document.getElementById(""+e.key)     
            elementReference.click()
        }
        
        catch(error) {
            console.error(error);
        }          

    }     

