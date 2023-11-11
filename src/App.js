import React from "react";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <>
      <main className="bg-secondary-mongolia h-screen flex items-center justify-center font-ubuntu">
        <div className="bg-white relative p-4 flex md:flex-row flex-col rounded-xl shadow-md md:max-h-[550px] md:max-w-[1000px] h-full w-full">
          <Sidebar />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequuntur inventore eaque alias odio illo ut ratione iusto quia
          iure, ad voluptates sit molestias omnis ipsam et vero. Laudantium,
          culpa!
        </div>
      </main>
    </>
  );
};

export default App;
