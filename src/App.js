import React,{useState} from "react";
import Navbar from "./component/Navbar";
import Cardd from "./component/Cardd";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  let [cartvalue,setcartvalue]=useState(0)
  return <>
<Navbar cartvalue={cartvalue}/>
<Header/>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <Cardd setcartvalue={setcartvalue}/>
                        <Cardd setcartvalue={setcartvalue}/>
                        <Cardd setcartvalue={setcartvalue}/>
                        <Cardd setcartvalue={setcartvalue}/>
                       
                        </div>
                        </div></section>
                        <Footer/>
    
  </>
}

export default App;
