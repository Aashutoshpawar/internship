import React from "react";
const App=()=>{
  return(
    <>
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center fw-bold bg-dark p4 my-3 text-light"></h1>
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <img src="image/img1.jpg" alt="" />
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-danger fw-bold px-4 mx-2">add to cart</button>
                    <button className="btn btn-outline-dark fw-bold px-4">buy now</button>
                  </div>
                    
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      >
    </>
  )
}
export default App;