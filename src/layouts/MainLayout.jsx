import { Outlet } from "react-router"

//jodi bhule jao ondho kore dao
function MainLayout() {
  return (
    <div>

        <div className="min-h-screen flex justify-center items-center">
        <Outlet/>
        </div>
  
    </div>
  )
}

export default MainLayout