import { Outlet } from "react-router-dom"
import AppSidebar from "../../components/sidebar/AppSidebar"
import './main.css';
import AppNavbar from "../../components/navbar/AppNavbar";

function Main() {
  return (
    <div className='app-container'>
    <AppSidebar/>
    <main className='app-main'>
    <AppNavbar/>
    <section className="section">
    <Outlet/>
    </section>
  
    </main>
    </div>
  )
}

export default Main