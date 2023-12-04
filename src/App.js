
import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./AppContext/AppContext";
import './App.css'

export default function App() {

  const {fetchblogposts} = useContext(AppContext)

  useEffect(()=>{
    fetchblogposts()
  },[]);

  return <div className="flex flex-col items-center w-full">

    <Header/>
    <Blogs/>
    <Pagination/>

  </div>;
}
