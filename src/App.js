import React from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const App = () => {
  return (
    <>
      <main className="bg-secondary-mongolia h-screen overflow-hidden md:flex items-center justify-center font-ubuntu">
        <div className="md:bg-white bg-transparent rounded-xl shadow-md absolute md:relative p-4 flex md:flex-row flex-col md:max-h-[550px] md:max-w-[900px] h-full w-full">
          <Sidebar />
          <Main />
        </div>
      </main>
    </>
  );
};

export default App;
