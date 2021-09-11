import React from "react";
import Nav from "../Nav";
import Main from "../Main";
import Footer from "../Footer";
function Layout({children}) {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Main> {children} </Main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
