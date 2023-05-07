import { Button } from "@mui/material";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/navbar";
import MainComponents from "./pages/Articles/my-component/main";
import ContactComponent from "./pages/Contact/contact";
import LoginDialog from "./pages/Dialog/login-dialog";
import SignupDialog from "./pages/Dialog/signup-dialog";
import NotFoundPage from "./pages/Notfound/404-not-found";
import OtherComponent from "./pages/Other/other";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        {/* <Route path='*' element={<NotFoundPage />} /> */}
        <Route path="/" element={<HomeComponent />} />
        <Route path="/articles" element={<MainComponents />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/other" element={<OtherComponent />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </React.Fragment>
  );
}

const HomeComponent = () => {
  const [open, setOpen] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="background">
      {!open ? (
        <Button
          onClick={() => setOpen(true)}
          style={{
            margin: "100px 20px 100px 100px",
            border: "1px solid white",
            borderRadius: 5,
            padding: 10,
            color: "white",
          }}
        >
          Click to signup
        </Button>
      ) : null}
      {!open || !openLogin ? (
        <Button
          onClick={() => setOpenLogin(true)}
          style={{
            // margin: 100,
            border: "1px solid white",
            borderRadius: 5,
            padding: 10,
            color: "white",
          }}
        >
          Click to login
        </Button>
      ) : null}
      <SignupDialog open={open} setOpen={setOpen} />
      <LoginDialog open={openLogin} setOpen={setOpenLogin} />
    </div>
  );
};

export default App;
