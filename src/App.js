import React from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const App = () => {
  return (
    <>
      <main className="bg-secondary-mongolia h-screen flex items-center justify-center font-ubuntu">
        <div className="bg-white relative p-4 flex md:flex-row flex-col rounded-xl shadow-md md:max-h-[550px] md:max-w-[900px] h-full w-full">
          <Sidebar />
          <Main />
        </div>
      </main>
    </>
  );
};

export default App;
