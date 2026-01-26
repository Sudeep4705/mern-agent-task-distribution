import { Route, Routes } from "react-router-dom"
import UserLayout from "../Layouts/UserLayout"
import HomePage from "./UserLayout/HomePage"
import AdminLayout from "../Layouts/AdminLayout"
import { ToastContainer } from "react-toastify"
import Login from "./AdminLayout/Login"
import AddAgent from "./AdminLayout/AddAgent"
import AdminIndexRedirect from "./AdminLayout/AdminindexRedirect"
import AddCsv from "./AdminLayout/AddCsv"
import AgentList from "./AdminLayout/ListAgent"


function App() {


  return (
    <>
    <ToastContainer position="top-center"/>
    <Routes>
      {/* User */}
      <Route path="/" element={<UserLayout/>}>
      <Route index element={<HomePage/>}/>

      </Route>
      {/*Admin*/}
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<AdminIndexRedirect/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="add" element={<AddAgent/>}/>
        <Route path="csv" element={<AddCsv/>}/>
        <Route path="agentlist" element={<AgentList/>}/>
       
      </Route>
    </Routes>
    
    </>
  )
}

export default App
