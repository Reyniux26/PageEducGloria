import React from 'react'

function Cards() {
  return (
    <div className="row">
  <div className="col-lg-4">
    <br/>
    <br/>
    <svg
      className="bd-placeholder-img rounded-circle"
      width={110}
      height={110}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Publicaciones</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal">Articulo 1</h2>
    <p>
      Some representative placeholder content for the three columns of text
      below the carousel. This is the first column.
    </p>
    <p>
      <navLink  className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
  <div className="col-lg-4">
    <svg
      className="bd-placeholder-img rounded-circle"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal">Articulo 2</h2>
    <p>
      Another exciting bit of representative placeholder content. This time,
      we've moved on to the second column.
    </p>
    <p>
      <navLink className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
  <div className="col-lg-4">
    <svg
      className="bd-placeholder-img rounded-circle"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal">Articulo 3</h2>
    <p>
      And lastly this, the third column of representative placeholder content.
    </p>
    <p>
      <navLink className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
  <div className="col-lg-4">
    <svg
      className="bd-placeholder-img rounded-circle"
      width={140}
      height={140}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
    </svg>
    <h2 className="fw-normal">Heading</h2>
    <p>
      And lastly this, the third column of representative placeholder content.
    </p>
    <p>
      <navLink className="btn btn-secondary" to="#">
        Ver más »
      </navLink>
    </p>
  </div>
  {/* /.col-lg-4 */}
</div>

  )
}

export default Cards