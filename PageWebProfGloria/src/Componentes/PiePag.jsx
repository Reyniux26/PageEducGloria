import React from 'react'

const PiePag = () => {
  return (

    <footer
    className="pt-5 aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm text-center align-self-end ">
            Gloria del Jesús Hernández Marín 
          <br />
          Oficina: Ciudad del Carmen Campeche
          <br />
          Universidad Autónoma del Carmen
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg> 
          Col. Benito Juárez. Calle 56 #4xAv. Concordia. C.P 24180.
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
            Teléfono: (0152) 938 38 2 65 15
          <br/>
          Cel. 938 104 83 82
          <br />
          <hr className="mt-1 hr-color  d-inline-block mx-auto" />
        </div>
      </div>
      <div className="row subfooter2">
        <div
          id="subfooter2_1"
          className="col-sm-12 col-md-3 text-start align-self-center"
        >
          Gloria del Jesús Hernández Marín
        </div>
        <div id="subfooter2_2" className="col-sm-12 col-md-9 text-end pt-2 ">
          <span className="fa-stack fa-1x">
            <a target="_blank" href="https://www.facebook.com/unacaroficial">
              <i className="far fa-circle fa-stack-2x fa-inverse" />
              <i className="fa-brands fa-facebook-f fa-stack-1x fa-inverse" />
            </a>
          </span>
          <span className="fa-stack fa-1x">
            <a target="_blank" href="https://www.instagram.com/unacar_oficial">
              <i className="far fa-circle fa-stack-2x fa-inverse" />
              <i className="fa-brands fa-instagram fa-stack-1x fa-inverse" />
            </a>
          </span>
          <span className="fa-stack fa-1x">
            <a target="_blank" href="https://twitter.com/unacar">
              <i className="far fa-circle fa-stack-2x fa-inverse" />
              <i className="fab fa-twitter fa-stack-1x fa-inverse" />
            </a>
          </span>
          <span className="fa-stack fa-1x">
          <a  href="https://www.facebook.com/gloria.marin.520900" target="_bank">
          <i class="bi bi-facebook"></i>
          <button type="button" class="btn btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-facebook" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
  </svg>
                </button></a>
          </span>
          <span className="fa-stack fa-1x">
            <a target="_blank" href="mailto:desarrollo@delfin.unacar.mx">
              <i className="far fa-circle fa-stack-2x fa-inverse" />
              <i className="fa-sharp fa-regular fa-envelope fa-stack-1x fa-inverse" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default PiePag