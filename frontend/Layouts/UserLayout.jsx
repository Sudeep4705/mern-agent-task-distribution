import { Outlet } from "react-router-dom";
import Navbar from "../src/UserLayout/Navbar";

export default function UserLayout(){
    return(
        <>
        <div className="layout">
            {/* <Navbar/> */}
            <main className="main-content">
                <Outlet/>
            </main>
        </div>
        </>
    )
}