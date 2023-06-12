import React, {useEffect, useMemo, useState} from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import SelectedPost from "../../pages/SelectedPost";
import About from "./../../pages/About";
import Error from "./../../pages/Error";
import Posts from "./../../pages/Posts";
import Login from "./../../pages/Login";

const AppRouter = () => {
    return (
        <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/posts" element={<Posts />}/>
              <Route path="/error" element={<Error />}/>

              <Route path="/posts/:postId" element={<SelectedPost/>} />
              <Route path="*" element={<Navigate replace={true} to="/error" />}/>
          </Routes>
    );
};

export default AppRouter;