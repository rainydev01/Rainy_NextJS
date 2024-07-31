import React, { Fragment } from "react";

const city = () => {
  return (
    <Fragment>
      <div className="container-fluid alladrsmain">
        <div className="container">
          <div className="row">
            <div className="col-md-12 dlrsadrs">
              <h4>VILLA NUEVA</h4>
              <div className="col-md-6">
                <div className="alladrs">
                  <h2 style={{ color: "#0479bf" }}>
                    MAAYANOT S.A (Envirotech)
                  </h2>
                  <h2></h2>
                  {/* <h2>
										Contact Person:-
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Nithin Balaji R
										</span>
									</h2> */}
                  <p>
                    7 Avenida A 44-97 Zona 12 Monte Maria 3,
                    <br />
                    Villa Nueva, Gautemala
                    <br />
                    Central America.
                  </p>
                  <h2>
                    Mob:-
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        fontFamily: "sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      +502 2209 6565/ +502 55798005
                    </span>
                  </h2>
                  <h2>
                    Email:-{" "}
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        fontFamily: "sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      - info@envirotechgt.com
                    </span>
                  </h2>
                  <h2>
                    Website:-{" "}
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        fontFamily: "sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      http://www.envirotechgt.com
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default city;
