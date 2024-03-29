import React,{useState} from 'react'

function Cardd({setcartvalue}) {
    let [toggle,Settoggle]=useState(true)
  return <>
      <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                            setcartvalue(value=>value+1)
                                             Settoggle(false)
                                        }
                                        }>
                                            Add to Cart</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setcartvalue(value=>value-1)

                                        Settoggle(true)

                                    }
                                    }>
                                       remove</button>
                                    }
                                    </div>
                                   

                            </div>
                        </div>
                    </div>
  </>
}

export default Cardd