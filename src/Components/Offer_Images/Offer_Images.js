import "./Offer_Images.css";


const Offer_Images = (props) => {
  return (
    <>
    <div className="assets mt-3 p-5">
      <div className=" row ">
        {props?.imgs.map((asset) => (
          <div className="asset mb-3 col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
            <img src={asset} alt="" className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Offer_Images