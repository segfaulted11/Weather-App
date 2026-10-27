import { X } from "lucide-react";
import { useState } from "react";

function LocationModal({onClose}) {

const [city,setCity] = useState("");

const handleSubmit = (e) =>{
e.preventDefault();
console.log(city.trim())
}

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-75 p-5 w-100 rounded-2xl bg-gray-100 shadow-2xl">
        <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium text-center">
          Where are you today?
        </h2>
        <button className="btn btn-info" onClick={onClose}><X/>
</button>
</div>
<div className="pt-8">

  <form action="" className="space-y-5" onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter City Name" className="bg-blue-200 border-2 w-full" value={city}
    onChange={(e)=>setCity(e.target.value)}
    />
<div className="">
    <button type="submit" className="btn btn-primary w-full">Get Weather</button>
</div>
  </form>
</div>
<div className="flex justify-center font-extrabold">or</div>
<div className="">
    <button type="button" className="btn btn-primary w-full">use my location</button>
</div>

      </div>
    </div>
  );
}

export default LocationModal;
