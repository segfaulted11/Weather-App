import { useState } from "react"
import LocationModal from "../components/LocationModal";

function Home() {

  const [click, setClick] = useState(false);


  return (
    <div className="">

    <div className="text-center">
    <h1 className="text-6xl text-blue-300">Next level <span className="text-blue-400 font-extrabold">Weather</span>
    </h1>
    <p className="text-md py-4 text-gray-500">Check your weather in next level</p>
  </div>

  <div className="flex justify-center">
    <button type="button" className="btn btn-primary hover:scale-105 transition-all delay-50 "
    onClick={()=>setClick(true)}>Check Weather</button>
    </div>

{
  click && <LocationModal onClose={()=>setClick(false)}/>
}
{/* here 'onClick' is not any event, its just a param, you r sending the setter function where its value is being false */}

    </div>
  )
}

export default Home