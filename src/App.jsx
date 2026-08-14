import NavBar from "./components/NavBar";
import ExtensionToggler from "./components/ExtensionToggler";
import { useState } from "react";
import Extensions from "./data.json";

function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-t from-[#EBF2FC] to-[#EEF8F9] 
      pt-10 transition duration-300 sm:px-0 p-5
      dark:bg-gradient-to-t dark:from-[#091540] dark:to-[#040918]"
    >
      <NavBar />

      <div className="max-w-7xl mx-auto my-10 flex flex-col sm:flex-row gap-5 items-center justify-between">
        <h1 className="text-4xl font-semibold">Extension List</h1>
        <div className="filter flex gap-3">

       {/*  Extensions Filtering Buttons  */}

          <button className="bg-white dark:bg-[rgb(47,53,75)] p-3 px-5 rounded-full ">
            All
          </button>
          <button className="bg-white dark:bg-[rgb(47,53,75)] p-3 px-5 rounded-full">
            Active
          </button>
          <button className="bg-white dark:bg-[rgb(47,53,75)] p-3 px-5 rounded-full">
            Inactive
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gird-cols-1 gap-3">

       {/* Extension Cards */}

        {Extensions.map((ex) => 
        (
          <div className="card rounded-2xl border border-gray-400 p-5 bg-white dark:bg-[rgb(47,53,75)]">
          <div className="card-info">
            <div className="flex gap-4">
              <img src={ex.logo} alt="" />
              <div className="card-sub-info">
                <h1 className="text-xl font-semibold mb-1">{ex.name}</h1>
                <p className="text-gray-400">
                  {ex.description}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button className="bg-gray-200 h-7 px-4 rounded-full border border-gray-400 cursor-pointer dark:bg-gray-700">Remove</button>
              <ExtensionToggler isOn={enabled} onClick={()=>setEnabled(!enabled)}/>
            </div>
          </div>
        </div>
        ))}

      </div>
      
    </section>
  );
}

export default App;
