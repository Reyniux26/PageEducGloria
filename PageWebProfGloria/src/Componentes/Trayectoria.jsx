import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Trayectoria = () => {
  return (


<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">Trayectoria</h6>
          <div id="content">
            <ul className="timeline">
              <li className="event" data-date="26 Septiembre">
                <h3>Registration</h3>
                <p>
                  Get here on time, it's first come first serve. Be late, get
                  turned away.
                </p>
              </li>
              <li className="event" data-date="18 Noviembre">
                <h3>Opening Ceremony</h3>
                <p>
                  Get ready for an exciting event, this will kick off in amazing
                  fashion with MOP &amp; Busta Rhymes as an opening show.
                </p>
              </li>
              <li className="event" data-date="30 Octubre">
                <h3>Main Event</h3>
                <p>
                  This is where it all goes down. You will compete head to head
                  with your friends and rivals. Get ready!
                </p>
              </li>
              <li className="event" data-date="10 Diciembre">
                <h3>Closing Ceremony</h3>
                <p>
                  See how is the victor and who are the losers. The big stage is
                  where the winners bask in their own glory.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Trayectoria