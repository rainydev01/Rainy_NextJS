import React, { Fragment } from "react";

const GroundWaterRecharging = () => {
  return (
    <Fragment>
      <div className="container groundwater">
        <div className="row groundwatersec">
          <div className="col-md-6 my-auto">
            <div className="groundwatersimg">
              <img src="../static/images/homepage/GWR.png" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="groundwaterstxt">
              <h3>Groundwater Recharging</h3>
              <p>
                ‘V-wire injection well' technology is used to recharge
                groundwater source and replenish the water table. Run off
                rainwater is made to pass into a silt trap through a channel and
                then to an injection well. Here, it goes through multiple
                filtration media and is eventually passed on to a specially
                designed storage well. The storage well has dual non clogging
                V-Wire screens attached to a percolator pipe. The clean water is
                then made to percolate into deep layers of the earth's strata,
                ultimately recharging the groundwater source and replenishing
                the water table.
              </p>
              <button>
                <a href="/products/ground-water-recharge">
                  Read More{" "}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GroundWaterRecharging;
