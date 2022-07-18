import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <>
      <div className="contacts">
        <div className="contactDetails">
          <div className="contactPhone">
            <img src="https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-phone-icon-png-image_1817554.jpg" className='phoneLogo' alt="" />
            +91 1234567890
          </div>
          <div className='contactArticle'>Health Articles</div>
          <div className='contactHelp'>Need Help</div>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com/Images/Content/Doctor_Web.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com/Images/Content/Med_Web.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="stepsTitle">
        <h1>How to place an order with Truemeds</h1>
        <div className="steps">
          <div className="step">
            <div className="stepImage">
              <img src="https://www.truemeds.in/static/media/prescription.165ee0f1.svg" className='stepImg' alt="Doctor" />
            </div>
            <div className="stepInfo">
              <h3>Step 1</h3>
              <p className="stepUpload">Upload your prescription</p>
              <p className="stepAbout">Or search for your medicines and add them to your cart</p>
            </div>
          </div>

          <div className="step">
            <div className="stepImage">
              <img src="https://www.truemeds.in/static/media/consultation.92fe8567.svg" className='stepImg' alt="Doctor" />
            </div>
            <div className="stepInfo">
              <h3>Step 2</h3>
              <p className="stepUpload">Avail free doctor e-consultation</p>
              <p className="stepAbout">Once you confirm your order, our doctors will get in touch with you</p>
            </div>
          </div>

          <div className="step">
            <div className="stepImage">
              <img src="https://www.truemeds.in/static/media/medicine.4caad9a4.svg" className='stepImg' alt="Doctor" />
            </div>
            <div className="stepInfo">
              <h3>Step 3</h3>
              <p className="stepUpload">Opt for quality alternatives</p>
              <p className="stepAbout">Replace your branded medicines with doctor recommended alternatives and save up to 72%.</p>
            </div>
          </div>

        </div>

      </div>
      {/* <div class="sc-gpsAVS ebSjnA"><span>How to place an order with Truemeds</span><div class="sc-jNWZdT jHkXTJ"><div class="sc-gmAETw bitfhh"><div class="sc-jLfdbx jjsGCG"><img src="/static/media/prescription.165ee0f1.svg" alt="prescription"></div><div class="sc-fEpNni dAnFRi"><h3>Step 1</h3><span>Upload your prescription</span><p>Or search for your medicines and add them to your cart</p></div></div><div class="sc-gmAETw bitfhh"><div class="sc-jLfdbx jjsGCG"><img src="/static/media/consultation.92fe8567.svg" alt="consultation"></div><div class="sc-fEpNni dAnFRi"><h3>Step 2</h3><span>Avail free doctor e-consultation</span><p>Once you confirm your order, our doctors will get in touch with you</p></div></div><div class="sc-gmAETw bitfhh"><div class="sc-jLfdbx jjsGCG"><img src="/static/media/medicine.4caad9a4.svg" alt="medicine"></div><div class="sc-fEpNni dAnFRi"><h3>Step 3</h3><span>Opt for quality alternatives</span><p>Replace your branded medicines with doctor recommended alternatives and save up to 72%.</p></div></div></div></div> */}
    </>
  );
}

export default UncontrolledExample;