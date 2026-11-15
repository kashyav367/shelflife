import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Body = () => {
    return (
        <div
         style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
         }}
        >
           <Navbar />

           <div style={{flex:1}}>
            <Outlet />
            </div> 
           
         <Footer />  
        </div>
    );
}

export default Body;