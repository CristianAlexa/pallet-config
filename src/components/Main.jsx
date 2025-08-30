import React from "react";
import PalletForm from "./ui/PalletForm";
import { PalletProvider } from "../context/PalletContext";
import PalletView from "./ui/PalletView";

const Main = () => (
  <div className="h-screen pt-16 bg-slate-50 bg-[url('../../public/img/main-bg.jpg')] bg-cover bg-center ">
    <div className="w-full h-full bg-slate-200/50 flex justify-center items-start">
      <div className="w-10/12 border border-slate-300 rounded-2xl bg-slate-100/80 backdrop-blur-md p-8 flex gap-4 my-16">
        <PalletProvider>
          <div className="w-5/12">
            {/* form here */}
            <PalletForm />
          </div>
          <div className="w-7/12">
            <PalletView />
          </div>
        </PalletProvider>
      </div>
    </div>
  </div>
);

export default Main;
