import { Stack } from "@mui/system";

import "./Navbar.css";
import Logo from "./Assets/logo.png"
import search from "./Assets/Search.png"

const Navbar=()=>{
    return(
        <>
        <div className="Nav_container">
            <item>
                <img
                src={Logo} alt="Logo_Here"
                />
            </item>
            <item>
            <img
                src={search} alt="Logo_Here"
                />
            </item>
            
        
        </div>
        </>
    );
}

export default Navbar;