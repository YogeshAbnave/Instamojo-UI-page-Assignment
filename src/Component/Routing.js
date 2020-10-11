import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import App from './Pages/App'
import First from './Pages/First'; 
import Second from './Pages/Second'; 


const Routing = () =>{
    return(

        <BrowserRouter>
        <div>
            
        <Route exact path=""   component={App}></Route>
        
            <Route exact path="/Component/Pages/First"   component={First}></Route>
            <Route exact path="/Component/Pages/Second"  component={Second}></Route>
    
            </div>
        </BrowserRouter>

    )
}
export default Routing