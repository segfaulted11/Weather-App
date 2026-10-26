import { X } from "lucide-react";


function LocationModal({onClose}) {
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
      </div>
    </div>
  );
}

export default LocationModal;
