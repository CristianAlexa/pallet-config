import React from "react";

const Header = () => {
  return (
    <header className="p-4 bg-slate-100 border-b border-slate-400 flex justify-between items-center fixed top-0 left-0 w-full z-10 h-16 shadow-xl">
      <span>Enviropack Pallet Configurator</span>
      <button>Login</button>
    </header>
  );
};

export default Header;
