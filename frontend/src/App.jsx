import { Suspense } from "react";
import "@App.css";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Body from "@/components/main/Body";
import { routes } from "@/routes";

function App(){
    return(
        <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Body />}>
          {routes.map((route) => {
            const Component = route.component;

            return(
                <Route 
                key={route.path}
                path={route.path}
                element={<Component />}
                 />    
            )
          })}     
     </Route>
   </Routes>
 </Suspense>
</BrowserRouter> 
);
}

export default App;
