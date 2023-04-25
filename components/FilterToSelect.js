import React, { Fragment, useState } from "react";

const FilterToSelect = () => {
  const [showButton, setShowButton] = useState(false);
  const [inputValue, setInputValue] = useState("");
  let filterContent = null;
  const [buttonValue, setButonValue] = useState({
    name: "FL-80",
    url: "products/rainy-filters",
  });

  if (showButton) {
    filterContent = (
      <div className="col-md-6">
        <div className="rghtbtnt">
          <div className="shouldtry">
            <button>You Should Try</button>
          </div>
          <div className="flhndred">
            <a href={buttonValue.url}>
              <button>{buttonValue.name}</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onClickHandler = () => {
    console.log(inputValue);

    if (inputValue === null) {
      setButonValue({
        name: "FL-80",
        url: "products/rainy-filters",
      });

      setShowButton(true);
    }
    if (inputValue <= 120) {
      setButonValue({
        name: "FL-80",
        url: "products/rainy-filters",
      });

      setShowButton(true);
    }

    if (inputValue > 120 && inputValue <= 180) {
      setButonValue({
        name: "FL-150",
        url: "products/rainy-filters",
      });

      setShowButton(true);
    }
    if (inputValue > 180 && inputValue <= 250) {
      setButonValue({
        name: "FL-250",
        url: "products/rainy-filters",
      });
      //180 to 250
      setShowButton(true);
    }
    if (inputValue > 250 && inputValue <= 350) {
      setButonValue({
        name: "FL-300",
        url: "products/rainy-filters",
      });

      setShowButton(true);
    }

    if (inputValue > 350 && inputValue <= 500) {
      setButonValue({
        name: "FL-500",
        url: "products/rainy-filters",
      });

      setShowButton(true);
    }
    if (inputValue > 500) {
      setButonValue({
        name: "Custom Solution",
        url: "/contact-us/enquire",
      });

      setShowButton(true);
    }
  };

  return (
    <Fragment>
      <div className="container-fluid frmsecimg">
        <div className="container">
          <div className="row frmsec">
            <div className="col-md-6">
              <div className="rooftopfrm">
                <h3>Check which filter is suitable for your Rooftop</h3>

                <input
                  type="number"
                  min="0"
                  name="rooftop"
                  placeholder="Enter Rooftop Area in Square Meters"
                  value={inputValue}
                  onChange={onChangeHandler}
                />

                <div className="knwyroof">
                  <a
                    style={{ cursor: "pointer" }}
                    data-toggle="modal"
                    data-target="#rooftopModal"
                  >
                    Know your rooftop area
                  </a>
                </div>
                <button
                  disabled={inputValue > 0 ? false : true}
                  onClick={onClickHandler}
                >
                  Submit
                </button>
              </div>
            </div>
            {filterContent}
          </div>
        </div>
      </div>

      <div className="modal" id="rooftopModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">How to check rooftop area ?</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul>
                <li>
                  For a flat roof: Multiply the length of the rooftop area with
                  the width
                </li>
                <li>
                  For a sloping roof: Multiply the length of the rooftop area
                  with the slope height.
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterToSelect;
