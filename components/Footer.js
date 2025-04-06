import React, { Fragment, useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <Fragment>
      <div className="container-fluid footer-main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="footer-one">
                <img src="/images/logo/Wlogo1.png" alt="Footer Logo" />
                <p>
                  Farmland Rainwater Harvesting System
                  <br></br>
                  No 648, Ground Floor,
                  <br></br>
                  11th cross, 7th Block, Jaya Nagar,
                  <br></br>Bengaluru, Karnataka - 560070.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-two">
                <h5>Contact US</h5>
                <p>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+917338033790&text=%20Hello, I wanted to purchase Rainy Filter"
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+917338033790&text=%20Hello, I wanted to purchase Rainy Filter"
                  >
                    +91 73380 33790
                  </a>
                </p>
                {/* <p>
                  <a target="_blank" href="tel:7338033790">
                    <i className="fa fa-mobile" aria-hidden="true" />
                  </a>{" "}
                  <a target="_blank" href="tel:7338033790">
                    +91 73380 33790
                  </a>
                </p> */}
                <p>
                  <a target="_blank" href="tel:919996664458">
                    <i className="fa fa-mobile" aria-hidden="true" />
                  </a>{" "}
                  <a target="_blank" href="tel:919996664458">
                    +91 99966 64458
                  </a>
                </p>
                {/* <p>
									<a target='_blank' href='tel:9449443232'>
										<i className='fa fa-mobile' aria-hidden='true' />
									</a>{' '}
									+91 94494 43232
								</p> */}
                <p>
                  <a target="_blank" href="tel:08026766252">
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    />
                  </a>{" "}
                  <a target="_blank" href="tel:08026766252">
                    080 26766252
                  </a>
                </p>

                <p>
                  <a target="_blank" href="mailto: farmland_rhs@yahoo.co.in">
                    {" "}
                    <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                  </a>{" "}
                  <a target="_blank" href="mailto: farmland_rhs@yahoo.co.in">
                    {" "}
                    sales@rainyfilters.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="footer-three">
                <h5>Follow Us</h5>
                <p>
                  <a
                    href="https://www.instagram.com/rainy_filters02/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.facebook.com/Rainyfilters2002"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/rainy"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.youtube.com/@rainyfilters1223"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>

                  <a href="https://twitter.com/rainy_filters02" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </p>

                <div>
                  <button>
                    {" "}
                    <a href="/contact-us/faq">FAQ</a>{" "}
                  </button>
                </div>
                <div>
                  <button>
                    {" "}
                    <a href="/contact-us/enquire">Enquire</a>{" "}
                  </button>
                </div>
                <div>
                  <button>
                    {" "}
                    <a href="https://shop.rainyfilters.com/">Shop Now</a>{" "}
                  </button>
                </div>

                {/* <div id="google_translate_element"></div> */}

                {/* <script
									type="text/javascript"
									src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
								/>
								<div id="google_translate_element"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright-main">
        <div className="container">
          <ul>
            {/* <li>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#terms-conditions"
							>
								Launch demo modal
							</button>
						</li> */}
            <li>
              <a href="# " data-toggle="modal" data-target="#terms">
                {" "}
                Terms & Conditions{" "}
              </a>
              |
            </li>
            <li>
              <a href="# " data-toggle="modal" data-target="#shipping">
                {" "}
                Shipping policy{" "}
              </a>
              |
            </li>
            <li>
              <a href="# " data-toggle="modal" data-target="#refund">
                {" "}
                Cancellation and refund policy{" "}
              </a>
              |
            </li>
            <li>
              <a href="# " data-toggle="modal" data-target="#privacy">
                {" "}
                Privacy Policy{" "}
              </a>
              |
            </li>
            <li>
              <a href="# " data-toggle="modal" data-target="#cookie">
                {" "}
                Cookie Policy{" "}
              </a>
              |
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "default",
                }}
              >
                {" "}
                Copyright 2023{" "}
              </a>
            </li>
            {/* <li
							style={{
								fontSize: "12px",
								margin: "0px 5px",
								letterSpacing: "1px",
							}}
						>
							{" "}
							Copyright 2020
						</li> */}
          </ul>
        </div>
      </div>

      <div
        className="modal fade "
        id="terms"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div style={{ marginTop: "15vh" }} className="modal-content">
            <div
              className="modal-header"
              style={{
                display: "flex",
                margin: "auto",
                border: "none",
              }}
            >
              <h3 className="modal-title" id="exampleModalLabel">
                Terms and Conditions
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <p>
                      Welcome to FARMLAND RAINWATER HARVESTING SYSTEM (FRHS) or
                      Rainy Filters (hereinafter referred to as ‘FRHS’ or ‘Rainy
                      Filters’ or ‘Company’). Rainy Filters provide its services
                      to you, subject to the following terms and conditions. If
                      you access this web site or visit
                      http://www.rainyfilters.com/ , you accept these Terms and
                      Conditions of Use, as well as our other terms and
                      conditions on this web site, such as our Privacy Policy,
                      Cookie Policy and Disclaimer. Please read them carefully.
                      In addition, when you use any current or future Rainy
                      Filters service on this web site, you also will be subject
                      to the guidelines and conditions applicable to such
                      service. All products /Services and information displayed
                      on http://www.rainyfilters.com/ constitute "An invitation
                      to offer". Your orders for purchase constitute your offer
                      which shall be subject to the terms and conditions as
                      listed below. http://www.rainyfilters.com/ reserves the
                      right to accept or reject your offer.
                    </p>
                    <p>
                      <strong>APPLICABLE LAW</strong>
                      This site is created and controlled by Rainy Filters. The
                      laws of India shall apply and courts in Bengaluru,
                      Karnataka State only shall have jurisdiction in respect of
                      all the terms, conditions and disclaimers. Rainy Filters
                      reserves the right to make changes to the web site and the
                      terms, conditions and disclaimers at any time and without
                      information to the customers/users of the services/web
                      site of the Company.
                    </p>
                    <p>
                      <strong>DEFINITIONS</strong>
                      <ol>
                        <li>
                          1. "Agreement" means the terms and conditions as
                          detailed herein including all schedules, appendices,
                          annexures, privacy policy etc., and will include the
                          references to this agreement as amended, notated,
                          supplemented, varied or replaced from time to time.
                        </li>
                        <li>
                          2. "http://www.rainyfilters.com/" / "Rainy Filters" /
                          "web site " means the website or site or the online
                          shopping platform and the services provided by it
                          owned and operated by FRHS or Rainy Filters which
                          provides a venue to the users of
                          http://www.rainyfilters.com/ to view and/or buy the
                          products listed and/or information on the said
                          website.
                        </li>
                        <li>
                          3. "Vendor" / "seller" /"affiliates" shall mean the
                          person or any legal entity who offers for sale, sells
                          the products on the http://www.rainyfilters.com/
                        </li>
                        <li>
                          4. "Customer" / "buyer" shall mean the person, user of
                          the website or any legal entity who makes the offer
                          for sale on http://www.rainyfilters.com/ by placing an
                          order or floating an enquiry for and or purchases any
                          products through the platform of www.rainyfilters.com.
                        </li>
                        <li>
                          5. "User" / "you" means and includes any person or an
                          entity or any legal entity using or accessing the
                          services provided on this site.
                        </li>
                        <li>
                          6. “Product/Products" means and includes any goods/
                          merchandise/ products/ services/ offers/ display items
                          that are uploaded / showcased/ displayed on
                          www.rainyfilters.com and the related description,
                          information, procedure, processes, warranties,
                          delivery schedule, etc.
                        </li>
                      </ol>
                    </p>
                    <p>
                      <strong>ELECTRONIC COMMUNICATION</strong>
                      When you visit www.rainyfilters.com or send e-mails to us,
                      you are communicating with us electronically, you consent
                      to receive communications from us electronically. We will
                      communicate with you by e-mail or by posting notices on
                      this web site. You agree that all agreements, notices,
                      disclosures and other communications that we provide to
                      you electronically satisfy any legal requirement that such
                      communications be in writing.
                    </p>
                    <p>
                      <strong>COPYRIGHT AND TRADEMARKS</strong>
                      Unless otherwise stated, copyright and all intellectual
                      property rights in all material presented on the site
                      (including but not limited to text, audio, video or
                      graphical images), trademarks and logos appearing on this
                      site are the property of Rainy Filters, its parent,
                      affiliates and associates and are protected under
                      applicable Indian laws. You agree not to use any framing
                      techniques to enclose any trademark or logo or other
                      proprietary information of Rainy Filters. Any infringement
                      shall be vigorously defended and pursued to the fullest
                      extent permitted by law.
                    </p>
                    <p>
                      <strong>PERMISSION AND SITE ACCESS</strong>
                      Rainy Filters grants you a limited license to access and
                      make personal use of this site and not to download or
                      modify it, or any portion of it, except with express prior
                      written consent of Rainy Filters. This license does not
                      include any resale or commercial use of this site or its
                      contents; any collection and use of any product listings,
                      descriptions, or prices; any derivative use of this site
                      or its contents; any downloading or copying of account
                      information for the benefit of another merchant; or any
                      use of data mining, robots, or similar data gathering and
                      extraction tools. This site or any portion of this site
                      may not be reproduced, duplicated, copied, sold, resold,
                      visited, or otherwise exploited for any commercial purpose
                      without prior express written consent of Rainy Filters.
                      You may not frame or utilize framing techniques to enclose
                      any trademark, logo, or other proprietary information
                      (including images, text, page layout, or form) of Rainy
                      Filters and our affiliates without express written
                      consent. You may not use any meta tags or any other
                      "hidden text" utilizing Rainy Filter's name or trademarks
                      without the express written consent of Rainy Filters. Any
                      unauthorized use terminates the permission or license
                      granted by Rainy Filters.
                    </p>
                    <p>
                      <strong>CHANGES / PRODUCT DESCRIPTION</strong>
                      Rainy Filters reserves the right to suspend / cancel, or
                      discontinue any or all products or service at any time
                      without notice, make modifications and alterations in any
                      or all of the content, products and services contained on
                      the site without prior notice. If a product offered by
                      www.rainyfilters.com is not as described, your sole remedy
                      is to return it to us in unused condition within seven (7)
                      days of delivery.
                    </p>
                    <p>
                      <strong>USER ACCOUNT</strong>
                      Notwithstanding other legal remedies that may be available
                      to Rainy Filters, Rainy Filters may in its sole discretion
                      limit user activity by immediately removing user listing
                      either temporarily or indefinitely or suspend or terminate
                      user membership, and/or refuse to provide user with access
                      to the site: If the user is in breach any of the terms and
                      conditions of this agreement and/or the terms and
                      conditions of usage of Rainy Filters;
                      <ul>
                        <li>
                          If the user has provided wrong, inaccurate, incomplete
                          or incorrect information;
                        </li>
                        <li>
                          If your actions may cause any harm, damage or loss to
                          the other users or Rainy Filters
                        </li>
                      </ul>
                      Illegal and/or unauthorized use of the service, including
                      unauthorized framing of or linking to the Rainy Filters
                      site will be investigated, and appropriate legal action
                      will be taken, including without limitation, civil,
                      criminal and injunctive redress.
                    </p>
                    <p>
                      <strong>RISK OF LOSS</strong>
                      All items purchased from www.rainyfilters.com are made
                      pursuant to a shipment/dispatch contract. This means that
                      the risk of loss and title for such items pass to you upon
                      our delivery to the carrier/courier.
                    </p>
                    <p>
                      <strong>FORCE MAJEURE</strong>
                      Rainy Filters shall have no liability to you for any
                      interruption or delay in access to the Site irrespective
                      of the cause.
                    </p>
                    <p>
                      <strong>POLICY UPDATES</strong>
                      We reserve the right to change or update this policy at
                      any time by placing a prominent notice on our site. Such
                      changes shall be effective immediately upon posting to
                      this site. If any of the terms & conditions shall be
                      deemed to be invalid, void or for any reason
                      unenforceable, that term shall be deemed severable and
                      shall not affect validity & enforceability of any
                      remaining term & condition.
                    </p>
                    <p>
                      <strong>ENTIRE AGREEMENT</strong>
                      These Terms of Service constitute the entire agreement
                      between the parties with respect to the subject matter
                      hereof and supersedes and replaces all prior or
                      contemporaneous understandings or agreements, written or
                      oral, regarding such subject matter. The clauses as above
                      shall survive the termination or expiry of this agreement.
                    </p>
                    <p>
                      <strong>GENERAL</strong>
                      The waiver of a breach of any term hereof shall in no way
                      be construed as a waiver of any other term or breach
                      thereof. The person agreeing to these terms & conditions
                      of use represents & warrants that such person is
                      authorized to bind and thus bind his or her principal or
                      employer and has adequate legal capacity to enter into
                      these terms and conditions of use.
                    </p>
                    <p>
                      <strong>OUR ADDRESS</strong>
                      Head Office: SGS Complex, K.M.Road, Chikmagalur
                      PIN-577101, Karnataka India Phone: 08262-231390 Fax:
                      08262-231393
                      <br></br>
                      Bengaluru Office: Farmland Rainwater Harvesting System
                      #648, 11th cross, 7th block, Jayanagar Bangalore – 560082
                      Mob: 094480 76595 / 094481 30524 / 094494 43232 Telefax:
                      080-26766252
                    </p>
                    <p>
                      <strong>DISCLAIMER</strong>
                      This site is provided to you by Rainy Filters On "As is"
                      and "As available" basis. Rainy Filters does not warrant
                      that this site, its servers or email sent from
                      rainyfilters.com are free of viruses and other harmful
                      components. All products displayed in our catalogues may
                      not be readily available for sale due to product
                      unavailability or for any other reason.
                    </p>
                    <p>
                      <strong>INFORMATION LIABILITY</strong>
                      In no event shall rainyfilters.com or any of its sources
                      be liable for any direct, special, incidental, indirect,
                      or consequential damages whatsoever (including but not
                      limited to: damages for loss of business profits, business
                      interruption, loss of business information, or any other
                      pecuniary loss) arising out of the use of the information
                      made available on this web site. Information on the
                      rainyfilters.com web site may not be reproduced, copied,
                      or altered without the express written consent of
                      rainyfilters.com and its affiliates.
                    </p>
                    <h4>
                      FARMLAND RAINWATER HARVESTING SYSTEM (FRHS) WARRANTY TERMS
                      AND CONDITIONS FOR RAINY FILTERS
                    </h4>
                    <p>
                      FARMLAND RAINWATER HARVESTING SYSTEM (FRHS) warrants all
                      products manufactured by it to be free from defects in
                      workmanship and materials, under normal usage and
                      conditions, for a period of Two (2) years from the
                      original invoice date. This warranty covers the repair or
                      replacement of any faulty components of the said filter at
                      our discretion. There is no coverage of whatsoever nature
                      provided for lost, self-repaired or destroyed filters or
                      the filters not attached with genuine spare parts. Thereof
                      and in accordance with the user manual, and shall provide
                      warranty services subject to the following:
                    </p>
                    <p>
                      <ol type="1">
                        <li>
                          1.This Warranty covers the defects resulting from
                          defective filter components, materials or
                          manufacturing, if such defects are revealed during the
                          period of 24 months since the date of purchase.
                        </li>
                        <li>
                          2.The filter is considered defective if it fails to
                          perform the functions as indicated in the user manual,
                          brochure, technical guide or any other similar
                          documents supplied with the filter.
                        </li>
                        <li>
                          3.The Warranty does not cover consumables or parts of
                          limited regular functionality that might be employed
                          during installation.
                        </li>
                        <li>
                          4.The Warrantor shall not be held responsible for the
                          loss and damage caused due to
                          restoration/alteration/modification of any filter
                          component.
                        </li>

                        <li>
                          5.The defects and damages revealed during the Warranty
                          period shall be removed free of charge exclusively by
                          the Warrantor only on producing original invoice copy
                          issued by authorized supplier or other similar
                          documents.
                        </li>
                        <li>
                          6.The Warrantor shall prefer to repair the
                          defective/malfunctioned filter device/component over
                          the replacement. In very inevitable circumstance only,
                          the Warrantor shall replace the said filter
                          device/component.
                        </li>
                        <li>
                          7.Repair and replacement time of defective
                          filter/components may be subjected to extension.
                        </li>
                        <li>
                          8.Warranty services will be provided under the
                          following conditions:<br></br>a. Immediately and
                          effectively notify Warrantor about determined filter’s
                          defects and cease any further usage.<br></br>
                          b. A copy of commercial invoice should be provided to
                          the warrantor along with the defective/damaged filter.
                          <br></br>
                          c. The serial number of delivered defective/damaged
                          filter device must match the serial number present in
                          Warrantor’s data base.<br></br>
                          f. The defective/damaged filter (in parts or whole
                          filter) must be appropriately packaged during its
                          loading, transportation and unloading.<br></br>
                        </li>
                        <li>
                          9.The warrantor reserves the right to charge the
                          Warranty beneficiary with the costs of service,
                          transportation and customs clearance if the defect
                          does not fall within the scope of this Warranty or the
                          device has not been proven defective.
                        </li>
                        <li>
                          10.The Warranty does not cover: <br></br>
                          a. Damages caused by acts of God, floods, fires,
                          lighting or other natural disasters, wars, chemical
                          exposure, heat sources, unexpected events or other
                          external factors.<br></br>
                          b. Mechanical/physical damages resulting from
                          incorrect installation, usage or other activities
                          inconsistent with the user manual or technical guide.
                          <br></br>
                          c. If the filter that has been tampered with by the
                          Warranty beneficiary or any other third party.
                          <br></br>
                          d. Damages/defects resulting from the usage of
                          improper or aftermarket components.<br></br>
                          e. Damages/defects due to the user's misuse or lack of
                          knowledge.<br></br>
                        </li>
                        <li>
                          11.The replaced defective filter or components shall
                          become the property of the Warrantor.
                        </li>
                        <li>
                          12.The Warrantor reserves the right to refuse to
                          provide any Warranty services if it would result in a
                          breach of warranty terms and conditions.
                        </li>
                        <li>
                          13.This Warranty Agreement shall not be interpreted to
                          render Rainy Filters for injuries or damages of any
                          kind- direct, consequential or contingent to persons
                          or property.
                        </li>
                        <li>
                          14.Rainy Filters shall not be held liable for repairs
                          or alterations made without prior written approval for
                          products clogged by suspended matter, precipitates or
                          biological growth, or for failure resulting from the
                          lack of proper maintenance.
                        </li>
                        <li>
                          15.Under no circumstances, the liability of Rainy
                          Filters shall exceed the value of the product at the
                          time of availing the warranty benefits if any
                          applicable, by the warranty beneficiary
                        </li>
                        <li>
                          16.Under no circumstances are the terms mentioned
                          above negotiable and no employee of Rainy Filters has
                          the authority to supersede them.
                        </li>
                        <li>
                          17.Any disagreements and obligations based upon the
                          purchase of Rainy Filters products and thereby imposed
                          on Rainy Filters shall be governed by and construed
                          according to the laws of India and subject to the
                          jurisdiction of Bengaluru, Karnataka State Courts
                          only.
                        </li>
                        <li>
                          18.This Warranty Terms and Conditions may be changed
                          if the Buyer and the Guarantor establish different
                          conditions in a separate agreement.
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
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
      <div
        className="modal fade "
        id="shipping"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div style={{ marginTop: "15vh" }} className="modal-content">
            <div
              className="modal-header"
              style={{
                display: "flex",
                margin: "auto",
                border: "none",
              }}
            >
              <h3 className="modal-title" id="exampleModalLabel">
                Shipping policy
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <strong>Shipping policy for domestic orders</strong>
                    <p>
                      All the orders are processed within 1 or 2 business days (excluding weekend and holidays) after receiving your order confirmation email, you will receive another notification when your order has shipped. The shipping time will be varied between 4-7 business days (excluding weekend and holidays). If we are experiencing a high volume of orders, shipments may be delay for few days. If your shipment experiences a significant delay, we will contact you via email or phone.
                    </p>
                    <p>Free shipping for all the orders within India.</p>
                    <strong>Shipping policy for International orders:</strong>
                    <p>All the orders are processed within 1 or 2 business days (excluding weekend and holidays) after receiving your order confirmation email, you will receive another notification when your order has shipped. The shipping time will be varied between 7-10 business days (excluding weekend and holidays). If we are experiencing a high volume of orders, shipments may be delay for few days. If your shipment experiences a significant delay, we will contact you via email or phone.</p>
                    <p>International shipping prices and delivery dates may vary by zones.</p>
                    <strong>Shipment Confirmation and order tracking</strong>
                    <p>You will receive a shipment confirmation email with your tracking number once your order has shipped. The tracking number will be active within 24 hours.</p>
                    <strong>Customs, Duties, and Taxes</strong>
                    <p><a href="https://shop.rainyfilters.com/">https://shop.rainyfilters.com</a> is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the customer’s responsibility (including tariffs, taxes, and other costs).</p>
                    <strong>Damages</strong>
                    <p><a href="https://shop.rainyfilters.com/">https://shop.rainyfilters.com</a> is not liable for any products damaged or lost during shipping. If you received your order damaged, please file a claim with the shipment carrier. Save all packaging materials and damaged goods before filing a claim.</p>
                    <strong>Incorrect Shipping Addresses and Refused Delivery</strong>
                    <p>We make every attempt to validate the shipping address provided at checkout to ensure it’s recognized as a valid address by the USPS. If we cannot validate the address, we will try to contact the customer to provide an updated address. If we cannot update the address, the order will be canceled and refunded.</p>
                    <p><a href="https://shop.rainyfilters.com/">https://shop.rainyfilters.com</a> will not be held responsible if the customer provides the wrong shipping address and we cannot recover the package.</p>
                    <strong>Exchange policy:</strong>
                    <p>We only accept the exchanges only under the following conditions.</p>
                    <p>
                      <ul className="list-disc">
                        <li><strong>Damaged product:</strong></li>
                        <li>Exchange requests are only accepted if the received product is damaged.</li>
                        <li>Please inspect the order, also the video of the package unboxing, pictures of the received product are necessary. Kindly notify us within 3 days if you receive aby damaged product or wrong product.</li>
                        <li>Exchange eligibility:</li>
                        <li>Exchange is applicable only for the orders within India. International orders are not eligible for exchange.</li>
                      </ul>
                      <strong> 2. Initiating an exchange:</strong>
                      <p className="space-note">1. Notification:</p>
                      <ul className="list-disc">
                        <li>To initiate an exchange for damaged product. Kindly notify us within the following details.</li>
                        <li>Contact our customer support team at ( sales@rainyfilters.com/ 7338033790) with the following details.
                        </li>
                        <li>Order number.</li>
                        <li>Description of the damage.</li>
                        <li>Clear photographs and videos of the damaged or wrong product received.</li>
                      </ul>
                      <p className="space-note">2. Verification:</p>
                      <ul className="list-disc">
                        <li>Our customer support team will review the information, images and videos provided.</li>
                        <li>If the product is confirmed to be damaged, we will provide the instruction for the exchange process.</li>
                      </ul>
                      <p className="space-note">3. Exchange process:</p>
                      <ul className="list-disc">
                        <li>Once the exchange is approved, we will arrange the pickup.</li>
                        <li>Upon receiving the returned item, our team will inspect it to ensure the damage is consistent with the provided information.</li>
                        <li>If the damage is verified, we will process the exchange and dispatch the replacement product to you.</li>
                      </ul>
                    </p>
                    <strong>Missing or Stolen Shipments</strong>
                    <p>If you didn't receive your order, but the shipping carrier has reported that it was delivered,</p>
                    <p>please let us know as soon as possible:</p>
                    <p>Call <a href="tel:73380-33790">[+91 73380 33790]</a></p>
                    <p>Or alert us at <a href="mailto:info@rainyfilters.com">[info@rainyfilters.com]</a></p>
                    <p>We will file a claim with the shipping carrier. Local law enforcement will be involved. We will replace or refund your order when the investigation is complete. Allow up to 21 days for the investigation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
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
      <div
        className="modal fade "
        id="refund"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div style={{ marginTop: "15vh" }} className="modal-content">
            <div
              className="modal-header"
              style={{
                display: "flex",
                margin: "auto",
                border: "none",
              }}
            >
              <h3 className="modal-title" id="exampleModalLabel">
                Cancellation and refund policy
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <strong>Cancellation and refund policy</strong>
                    <div>
                      <p className="mb-0">Return Period: </p>
                      <p className="mt-0">- We offer a 7-day return policy, allowing you 7 days from the date of receiving your item to request a return.</p>
                    </div>
                    <div>
                      <p className="mb-0">Eligibility Criteria:  </p>
                      <p className="m-0">- To be eligible for a return, the item must be in the same condition as you received it, including all parts, unused, with the user manual, and in its original packaging.</p>
                      <p className="m-0">- You must provide the invoice copy or proof of purchase to initiate the return process.</p>
                    </div>
                    <div>
                      <p className="mb-0">Return Process:   </p>
                      <p className="m-0">- After applying for a return, please allow 48 hours for us to process your request.</p>
                      <p className="m-0">- Once the return request is authorized, we will initiate a reverse pickup. Our courier partner will come to your doorstep to pick up the order.</p>
                      <p className="m-0">- Upon receiving the returned order, our support team will examine it. If the reported problems are confirmed, our team will process a refund within 2-5 business days.</p>
                    </div>
                    <div>
                      <p className="mb-0">Return Deduction:</p>
                      <p className="m-0">- If a customer decides to return the order, a restocking fee of 15% of the total order amount will be deducted from the refund.</p>
                      <p className="m-0">- This deduction is applied to cover administrative and processing costs associated with the return.</p>
                    </div>
                    <div>
                      <p className="mb-0">Damaged Product Return/Exchange:</p>
                      <p className="m-0">-In the event of receiving a damaged product, customers wishing to initiate a return or exchange must follow specific procedures. Capture a video and take pictures during the unboxing process to document the condition of the product.</p>
                      <p className="mt-0">- These visual materials are crucial for our assessment of the damage and will facilitate a prompt resolution of your return or exchange request.</p>
                    </div>
                    <p>We appreciate your understanding of these policies, which are in place to ensure a fair and transparent return process. If you have any questions or concerns, please reach out to our customer support team for assistance.</p>
                    <p>You can always contact us for any return question at <a href="mailto:info@rainyfilters.com">info@rainyfilters.com</a>.</p>
                    <div>
                      <strong>Return and Refund Policy for International orders:</strong>
                      <p>Returns and Refunds are not applicable for the international orders. </p>
                    </div>
                    <div>
                      <p className="mb-0">Damaged Product Replacement:</p>
                      <p className="m-0">-In the event of receiving a damaged product, customers wishing to initiate a replacement must follow specific procedures. Capture a video and take pictures during the unboxing process to document the condition of the product.</p>
                      <p className="m-0">- These visual materials are crucial for our assessment of the damage and will facilitate a prompt resolution of your replacement request.</p>
                      <p className="m-0">- New product will be delivered after the damage of the product is confirmed.</p>
                    </div>
                    <p>We appreciate your understanding of these policies, which are in place to ensure a fair and transparent return process. If you have any questions or concerns, please reach out to our customer support team for assistance.</p>
                    <p>You can always contact us for any replacement question at <a href="mailto:info@rainyfilters.com">info@rainyfilters.com</a>.</p>
                    <div>
                      <strong>Damages and issues:</strong>
                      <p>Our return policy covers instances where the product arrives damaged, incorrect products or in a defective condition. If you receive a damaged product, providing clear photographs and a description of the damage, your return process will be expedited. We will assess the issue promptly and if confirmed, provide you with a replacement.</p>
                    </div>
                    <div>
                      <strong>Exceptions / non-returnable items:</strong>
                      <p>We are unable to accept returns for products that have been used or installed. It is essential that customers thoroughly inspect their purchases for any damage or defects before using them. We encourage you to review your items upon receipt and contact our customer support immediately if you discover any issues.</p>
                    </div>
                    <div>
                      <strong>Replacement</strong>
                      <p>We accept the replacement only if the product arrives damaged, if you receive wrong item or in a defective condition the product will be exchanged with the new product. We will assess the issue promptly and, if confirmed, provide you with a replacement, as per your preference.</p>
                    </div>
                    <div>
                      <strong>Refunds</strong>
                      <p>Refunds are not applicable for international orders, in case if you receive any damaged or wrong product then mail us at <a href="mailto:info@rainyfilters.com">info@rainyfilters.com</a>.</p>
                    </div>
                    <div>
                      <strong>Damages and issues:</strong>
                      <p>Our return policy covers instances where the product arrives damaged, incorrect products or in a defective condition. If you receive a damaged product, providing clear photographs and a description of the damage your return process will be expedited. We will assess the issue promptly and, if confirmed, provide you with a replacement or a refund, as per your preference.</p>
                    </div>
                    <div>
                      <strong>Exceptions / non-returnable items:</strong>
                      <p>We are unable to accept returns for products that have been used or installed. It is essential that customers thoroughly inspect their purchases for any damage or defects before using them. We encourage you to review your items upon receipt and contact our customer support immediately if you discover any issues.</p>
                    </div>
                    <div>
                      <strong>Replacement</strong>
                      <p>We accept the exchange only if the product arrives damaged, if you receive wrong item or in a defective condition the product will be exchanged with the new product. We will assess the issue promptly and, if confirmed, provide you with a replacement, as per your preference.</p>
                    </div>
                    <div>
                      <strong>Refunds</strong>
                      <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 5-10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
                        If more than 15 business days have passed since we’ve approved your return, please contact us at <a href="mailto:info@rainyfilters.com">info@rainyfilters.com</a>.</p>
                    </div>
                    <strong>Cancellation Policy:</strong>
                    <div>
                      <p className="mb-0">1. Cancellation within 24 hours:</p>
                      <p className="mt-0">- If you choose to cancel your order within 24 hours of placing it, a restocking fee of 5% of the total order amount will be deducted.</p>
                    </div>
                    <div>
                      <p className="mb-0">2. Cancellation after 24 hours:</p>
                      <p className="m-0">- Orders can be canceled on receipt of the cancellation request, provided the Products have not been packed and the invoice generated.</p>
                      <p className="m-0">- If you decide to cancel your order after the initial 24-hour period, a restocking fee of 10% of the total order amount will be deducted.</p>
                      <p className="m-0">- Refunds for canceled orders will be initiated within 2-5 business days from the receipt of the cancellation request.</p>
                      <p className="m-0">- The refund amount will be processed through the same mode of payment used for the purchase..</p>
                      <p className="mt-0">- Refunds are subject to applicable policies and charges of the User’s bank/financial institution/payment gateway, as may be applicable.</p>
                    </div>
                    <div>
                      <p className="mb-0">3. Post-Packing and Invoicing:</p>
                      <p className="m-0">- The User is not allowed to cancel the order for Products after they have been packed and the invoice has been generated.</p>
                      <p className="mt-0">- If a User requests order cancellation via email after the Products have been packed and invoiced, cancellation cannot be guaranteed. Once the Products are packed and invoiced, they may have already entered the shipping process.</p>
                    </div>
                    <p>We appreciate your understanding of these policies, designed to streamline the cancellation process. If you have any questions or concerns, please contact our customer support team for assistance, please contact us at <a href="mailto:info@rainyfilters.com">info@rainyfilters.com</a>.</p>
                    <div>
                      <strong className="text-aws">Cancellation Policy for International orders:</strong>
                      <p className="mb-0 text-aws">1. Cancellation within 24 hours:</p>
                      <p className="mt-0 text-aws">- If you choose to cancel your order within 24 hours of placing it, a restocking fee of 6% of the total order amount will be deducted.</p>
                    </div>
                    <div>
                      <p className="mb-0 text-aws">2. Cancellation after 24 hours is not applicable for international orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
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
      <div
        className="modal fade "
        id="privacy"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content" style={{ marginTop: "15vh" }}>
            <div
              className="modal-header"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
              <h3 className="modal-title" id="exampleModalLabel">
                Privacy Policy
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <p>
                      FARMLAND RAINWATER HARVESTING SYSTEM (FRHS) recognises the
                      importance of maintaining your i.e. user privacy. This
                      Policy describes how we treat user information we collect
                      on our website (‘Website’ or ‘Site’). This Privacy Policy
                      applies to current and former visitors to our website and
                      to our online customers. By visiting and/or using our
                      website, you agree to this Privacy Policy.
                    </p>
                    <p>
                      FRHS provides adequate safeguards where such information
                      is processed in the way of including, but not limited to,
                      collection, recording, storing, utilisation, disclosure,
                      transfer and deletion. FRHS processes the data fairly in
                      compliance with the applicable Indian laws.
                    </p>
                    <strong>INFORMATION WE COLLECT</strong>
                    <p>
                      Non-Personally Identifiable Information: <br></br>
                      Non-personally identifiable information is information
                      that, by itself, cannot be tracked to a specific
                      individual. FRHS may collect non-personally identifiable
                      information while you are visiting our website. While
                      providing services and features, FRHS may collect web
                      surfing data such as your IP address, web pages on the
                      Site that have you visited, time and date. We use
                      different types of technologies to collect this
                      information, including cookies and single-pixel GIFs. If
                      your browser is configured to accept the cookies, these
                      cookies will be used to recognise your computer when you
                      revisit the Site to provide you with a superior user
                      experience to help you improve performance. However, if
                      you wish, you can configure your browser to block cookies.
                    </p>
                    <p>
                      Personally Identifiable Information:<br></br>
                      While providing various products, services or features, we
                      may ask you to provide personal information. For example,
                      you may be asked to provide your name, age, gender, email
                      address, telephone number, address, preferences and other
                      details. We may ask for similar information at other times
                      including during promotions sponsored by FRHS or its
                      affiliates. We may also collect information relating to
                      products and services provided to you, including details
                      of requests you may have made, the products and services
                      we may have provided, their delivery, billing and
                      invoicing, any communication or correspondence with you,
                      and other transactional information. We may also record
                      your communication with our customer care or with other
                      such contact points, in accordance with applicable law.
                    </p>
                    <p>
                      <strong>USE OF THE INFORMATION WE COLLECT</strong>
                      FRHS does not intentionally provide personally
                      identifiable information to third parties except under the
                      following conditions:
                    </p>
                    <p>
                      If you provide personally identifiable information as part
                      of an inquiry about products or services provided by one
                      of the advertisers or employees or while participating in
                      any promotional offers provided by FRHS from time to time,
                      we will provide that information to that advertiser or
                      employee or sponsor or co-sponsor of the promotional event
                      so that they may attempt to provide you with information
                      regarding the products or services or promotional offer
                      about which you inquired. FRHS may use the personally
                      identifiable information provided by users for credit
                      reporting, compilation of a transaction, internal
                      purposes, such as sales, human resources, marketing, and
                      administration. Further personally identifiable
                      information may be provided by FRHS to any statutory
                      authorities or to any regulatory body in accordance with
                      laws governing FRHS.
                    </p>
                    <p>
                      <strong>SECURITY</strong>
                      FRHS makes significant efforts to protect against the
                      loss, misuse, and alteration of the collected information.
                      These measures may include the use of secure server
                      technology. Be aware, however, that the Internet is not
                      completely secure. Therefore, we cannot ensure the
                      security of any information transmitted to us over the
                      Internet, and we accept no liability for any unintentional
                      disclosure. Some areas of our website may be
                      password-protected. To increase security, please do not
                      share your passwords with anyone. You shall not undertake
                      any act which amounts to breach of security and you shall
                      not try to access password-protected area of the Site
                      without proper authorisation.
                    </p>
                    <p>
                      <strong>GRIEVANCE</strong>
                      Provider of information may raise grievance to the
                      following e-mail ID: Name of Grievance Redressal Officer:
                      <br></br>
                      Mr. Varun Rinaldo Baptist ,Designation:HOD - Digital
                      Marketing, Email ID:varun.baptist@rainyfilters.com.
                      <br></br> All the grievances and any discrepancies of the
                      provider of information shall be redressed within one
                      month (30 days) from the date of receipt of notice of
                      grievance.
                    </p>
                    <p>
                      <strong>MODIFICATION</strong>
                      We reserve the right to modify this privacy policy at any
                      time by posting the changes on this page. We also will
                      notify you about significant changes to the privacy policy
                      by sending you a notice to the primary email address
                      specified in your account or by placing a prominent notice
                      on the Site. Your continued use of our site following
                      posting of the updated privacy policy will constitute your
                      acceptance of the changes.
                    </p>
                    <p>
                      <strong>JURISDICTION AND GOVERNING LAW</strong>
                      Any disputes arising under or connected with this Policy
                      shall be governed by the laws of India and courts of
                      Bengaluru, Karnataka state shall have exclusive
                      jurisdiction for any dispute arising under or connected
                      with this policy.
                    </p>
                    <p>
                      <strong>ACCEPTANCE OF PRIVACY POLICY</strong>
                      BY USING OUR WEBSITE, YOU ARE ACCEPTING THE PRACTICES SET
                      OUT IN THIS PRIVACY POLICY AND OUR TERMS OF USE AGREEMENT.
                    </p>
                    <h4>DISCLAIMER</h4>
                    <p>
                      <strong>General</strong>
                      Access to and use of this Rainy Filters site is subject to
                      the following terms and conditions and the laws of India.
                    </p>
                    <p>
                      <strong>Copyright</strong>
                      <ul>
                        <li>
                          1. © 2020 Farmland Rainwater Harvesting System, all
                          rights reserved. All copyright and other intellectual
                          property rights in all text, images, sound, software,
                          devices and its part are design protected, structure
                          or layout of website and other materials on this site
                          are owned by Farmland Rainwater Harvesting System.
                          References to affiliates or affiliated companies shall
                          include all members of Farmland Rainwater Harvesting
                          System.
                        </li>
                        <li>
                          2. You are permitted to browse this site and to
                          reproduce extracts by way of printing, downloading to
                          a hard disk and by distribution to other people but,
                          in all cases, for non-commercial, non-evidentiary use,
                          informational/educational and/or personal purposes
                          only. No reproduction of any part of the site may be
                          sold or distributed for commercial gain nor shall it
                          be modified or incorporated in any other work,
                          publication or site, whether in hard copy or
                          electronic format, including posting to any other
                          site.{" "}
                        </li>
                        <li>3. No other licence or right is granted.</li>
                      </ul>
                    </p>
                    <p>
                      <strong>Trade Marks</strong>
                      All trademarks displayed on this site are either owned or
                      used under license by Farmland Rainwater Harvesting System
                      or proprietor or Rainy Filters and affiliates.
                    </p>
                    <p>
                      <strong>Content</strong>
                      <ul>
                        <li>
                          1. The information on this site has been included in
                          good faith but is for general informational purposes
                          only. It should not be relied on for any specific
                          purpose and no representation or warranty is given as
                          regards its accuracy or completeness.
                        </li>
                        <li>
                          2. We reserve the right to make any changes and
                          corrections to this site as and when we consider it
                          appropriate and without notice.
                        </li>
                        <li>
                          3. The content on the site is updated on a continual
                          basis. While Rainy Filters attempts to keep its web
                          information accurate and timely, it neither guarantees
                          nor endorses the content, accuracy, or completeness of
                          the information, text, graphics, hyperlinks, and other
                          items contained on this server or any other server.
                          Facts and figures given are based on available
                          published data.
                        </li>
                        <li>
                          4. As a result of updates and corrections, web
                          materials are subject to change without notice from
                          site. Commercial use of web materials is prohibited
                          without the written permission of the company.
                        </li>
                        <li>
                          Farmland Rainwater Harvesting System and/or its
                          website is neither responsible nor liable for any
                          harmful viruses or other contamination of your system,
                          nor for any delays, inaccuracies, errors or omissions
                          arising out of your use of the site or with respect to
                          the material contained on the site. The company nor
                          its employees shall be responsible for any special,
                          indirect, incidental or consequential damages that may
                          arise from the use of, or the inability to use, the
                          site and/or the materials contained on the website
                          whether the materials contained on the website are
                          provided by Farmland Rainwater Harvesting System.
                        </li>
                        <li>
                          5. Farmland Rainwater Harvesting System and/or its
                          website is neither responsible nor liable for any
                          harmful viruses or other contamination of your system,
                          nor for any delays, inaccuracies, errors or omissions
                          arising out of your use of the site or with respect to
                          the material contained on the site. The company nor
                          its employees shall be responsible for any special,
                          indirect, incidental or consequential damages that may
                          arise from the use of, or the inability to use, the
                          site and/or the materials contained on the website
                          whether the materials contained on the website are
                          provided by Farmland Rainwater Harvesting System.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Intellectual Property Rights</strong>
                      Imitation of the graphics, reproduction of the content &
                      infringement of Copy Right, Trade Mark of the company
                      and/or its products is punishable offence.
                    </p>
                    <p>
                      <strong>Linked Sites</strong>
                      At various points throughout the website, you may be
                      offered automatic links to other internet sites relevant
                      to a particular aspect of this website. This does not
                      indicate that Farmland Rainwater Harvesting System or
                      Rainy Filters or affiliates are necessarily associated
                      with any of these other sites or their owners. Whilst it
                      is the intention of Rainy Filters that you should find
                      these other sites of interest, neither Farmland Rainwater
                      Harvesting System or Rainy Filters, nor affiliates, nor
                      their or their affiliates' officers, employees and agents
                      shall have any responsibility or liability of any nature
                      whatsoever for these other sites or any information
                      contained in them, none of which have been verified or
                      endorsed by Farmland Rainwater Harvesting System or Rainy
                      Filters or affiliates. If at any time you find that you
                      have accessed another site you may return to this website
                      by clicking on the "backwards" arrow, or by keying in the
                      domain address of Farmland Rainwater Harvesting System or
                      Rainy Filters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
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

      <div
        className="modal fade "
        id="cookie"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content" style={{ marginTop: "15vh" }}>
            <div
              className="modal-header"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
              <h3 className="modal-title" id="exampleModalLabel">
                Cookie Policy
              </h3>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <p>
                      FARMLAND RAINWATER HARVESTING SYSTEM (“we”, “us”, “FRHS”
                      or “Rainy”) is committed to respecting your ((“you”, “data
                      subject”, “user”, “subscriber) online privacy”). This
                      Cookie Policy explains how and why cookies and other
                      similar technologies may be stored on and accessed from
                      your device when you use or visit FRHS Website or
                      application that posts a link to this Policy
                      (collectively, “the websites” or “the Sites”). This Cookie
                      Policy should be read together with our Privacy Policy and
                      Terms of Use. Our website uses cookies, tags and other
                      technologies when you use any of the services on the FRHS
                      websites, mobile sites or mobile apps (collectively “the
                      services”). Cookies are used to ensure everyone has their
                      best possible experience. Cookies also help us keep your
                      account safe. By continuing to visit or use our services,
                      you are agreeing to the use of cookies and similar
                      technologies for the purposes we describe in this policy.
                      If you prefer not to receive cookies or web beacons, then
                      you should stop using our website/ mobile application, or
                      consult your browsing and third-party cookie settings as
                      described below.
                    </p>
                    <p>
                      <strong>
                        WHAT ARE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                      </strong>
                      Cookies are small pieces of text stored by a website/
                      mobile application you visit in your browser and
                      subsequently sent by your web browser in every request to
                      the website/ mobile application. A cookie file is stored
                      in your web browser and allows the Site or a third-party
                      to recognize you and make your next visit easier and the
                      Site more useful to you. Essentially, cookies are a user’s
                      identification card for the FRHS servers. Cookies allow
                      FRHS to serve you better and more efficiently, and to
                      personalize your experience on our Site. Web beacons, tags
                      and scripts may be used in the Websites or in emails to
                      help us to deliver cookies, count visits, understand usage
                      and campaign effectiveness and determine whether an email
                      has been opened and acted upon. We may analyse or perform
                      analysis based on the use of these technologies and
                      generate reports on an individual and aggregated basis.
                    </p>
                    <p>
                      Cookies can be "persistent" or "session" cookies. A
                      persistent cookie helps us recognize you as an existing
                      user, so it’s easier to return to website or interact with
                      our services without signing in again. After you sign in,
                      a persistent cookie stays in your browser and will be read
                      by FRHS when you return to one of our sites/ applications
                      or a partner site that uses our services. Session cookies
                      only last for as long as the session (usually the current
                      visit to a website/ application or a browser session).
                    </p>
                    <p>
                      The other tracking technologies work similarly to cookies
                      and place small data files on your devices or monitor your
                      website/ mobile application activity to enable us to
                      collect information about how you use our websites/
                      applications. This allows our websites/ applications to
                      recognize your device from those of other users of the
                      Sites. The information provided below about cookies also
                      applies to these other tracking technologies.
                    </p>
                    <p>
                      <strong>
                        HOW DO OUR WEBSITES/ MOBILE APPLICATIONS USE COOKIES AND
                        OTHER TRACKING TECHNOLOGIES?
                      </strong>
                      FRHS uses cookies and other tracking technologies to
                      identify you and your interests, to remember your
                      preferences, and to track your use of our website/ mobile
                      application. We also use cookies and other tracking
                      technologies to control access to certain content on our
                      website/ mobile application, protect the websites/ mobile
                      applications, and show you advertisements and to process
                      any requests that you make to us.
                    </p>
                    <p>
                      To administer our website/ mobile application and for
                      research purposes, FRHS also has contracted with
                      third-party service providers to track and analyse
                      statistical usage and volume information from our site
                      users. These third-party service providers use persistent
                      cookies to help us to improve the user experience, manage
                      our site content, and analyse how users navigate and
                      utilize the website/ mobile application.
                    </p>
                    <p>
                      <strong>WE CATEGORIZE COOKIES AS FOLLOWS</strong>
                      Each cookie falls within one of the five following
                      categories:
                    </p>
                    <table className="table" style={{ lineHeight: 1 }}>
                      <thead>
                        <tr>
                          <th scope="col">Sr No.</th>
                          <th scope="col">Category</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>
                      <tbody style={{ lineHeight: 1 }}>
                        <tr>
                          <th scope="row">1</th>
                          <td style={{ lineHeight: 1 }}>Essential Cookies</td>
                          <td style={{ lineHeight: 1 }}>
                            Essential cookies (First Party Cookies) are
                            sometimes called “strictly necessary” as without
                            them we cannot provide many services that you need
                            on the website/ mobile application. For example,
                            essential cookies help remember your preferences as
                            you move around the website/ mobile application.
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td style={{ lineHeight: 1 }}>Analytics Cookies</td>
                          <td style={{ lineHeight: 1 }}>
                            These cookies track information about visits to the
                            FRHS Filters so that we can make improvements and
                            report our performance. For example: analyse visitor
                            and user behaviour so as to provide more relevant
                            content or suggest certain activities. They collect
                            information about how visitors use the Websites/
                            mobile application, which website the user came
                            from, the number of each user’s visits and how long
                            a user stays on the Website/ mobile application. We
                            might also use analytics cookies to test new ads,
                            pages, or features to see how users react to them.
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td style={{ lineHeight: 1 }}>
                            Functionality or Preference Cookies
                          </td>
                          <td style={{ lineHeight: 1 }}>
                            During your visit to the website/ mobile
                            application, cookies are used to remember
                            information you have entered or choices you make
                            (such as your username, language or your region) on
                            the website/ mobile application. They also store
                            your preferences when personalizing the website/
                            mobile application to optimize your use of our
                            website. These preferences are remembered, through
                            the use of the persistent cookies, and the next time
                            you visit the website/ mobile application you will
                            not have to set them again.
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td style={{ lineHeight: 1 }}>
                            Targeting or Advertising Cookies
                          </td>
                          <td style={{ lineHeight: 1 }}>
                            These Third Party Cookies are placed by third party
                            advertising platforms or networks in order to,
                            deliver ads and track ad performance, enable
                            advertising networks to deliver ads that may be
                            relevant to you based upon your activities (this is
                            sometimes called “behavioural” “tracking” or
                            “targeted” advertising) on the website/ mobile
                            application. They may subsequently use information
                            about your visit to target you with advertising that
                            you may be interested in, on our website and other
                            websites. For example, these cookies remember which
                            browsers have visited the Website/ mobile
                            application. Most types of these cookies track
                            consumers via their Device ID or IP address
                            therefore they may collect personal data.
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td style={{ lineHeight: 1 }}>Third party Cookies</td>
                          <td style={{ lineHeight: 1 }}>
                            We use a number of partners that may also set
                            cookies on your device on our behalf when you visit
                            our website/ mobile application to allow them to
                            deliver tailored advertising within their domains,
                            for example Google Analytics. We endeavour to
                            identify these cookies before they are used so that
                            you can decide whether you wish to accept them or
                            not. Based on the type of cookies used by the
                            relevant third-party, the information these cookies
                            collect may include personal data but they would not
                            be able to directly identify you as an individual or
                            have any of your personal information such as Name,
                            E-mail id or mobile number.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <strong>WHEN DOES FRHS FILTERS PLACE COOKIES?</strong>
                      We use cookies on our websites, mobile sites and mobile
                      applications. Any browser visiting these sites will
                      receive cookies from us which helps us identify you more
                      quickly when you return. We will not use "cookies" or
                      other technologies to follow your click stream on the
                      Internet generally, but will use them, and other devices,
                      to determine which pages or information you find most
                      useful or interesting at our own website/ mobile
                      application.
                    </p>
                    <p>
                      <strong>
                        HOW COOKIES ARE USED FOR ONLINE ANALYTICS PURPOSES?
                      </strong>
                      We may use web analytics services on our Services, such
                      as, but not limited to those of Google Analytics. These
                      services help us analyse how users use the services,
                      including by noting the third-party site from which you
                      arrive. The information collected by the technology will
                      be disclosed to or collected directly by these service
                      providers, who use the information to evaluate your use of
                      the Services. We also use Google Analytics for certain
                      purposes related to online marketing, as described in the
                      following section.
                    </p>
                    <p>
                      <strong>WHAT ARE WEB BEACONS?</strong>
                      FRHS occasionally advertises on third party web sites. As
                      part of our effort to track the success of our advertising
                      campaigns, we may at times use a visitor identification
                      technology such as "web beacons," or "action tags," which
                      count visitors who have come to Our Site after being
                      exposed to FRHS banner ad on a third party site. We do not
                      use this technology to access your personal information
                      and it is only used to compile aggregated statistics about
                      visitors who come to Our Site to gauge the effectiveness
                      of our ads. By navigating on Our Site, you agree that we
                      can place cookie and web beacons on your computer or
                      device. If you prefer not to receive web beacons, then you
                      should stop using Our Site, or consult your browsing
                      settings.
                    </p>
                    <p>
                      <strong>HOW TO CONTROL COOKIES?</strong>
                      Most browsers allow you to control cookies through their
                      settings preferences. However, if you choose to turn off
                      these cookies you will still see advertising on the
                      internet but it may not be tailored to your interests. It
                      does not mean that you won't be served any advertisements
                      whilst you are online. Whilst we have mentioned most of
                      the third parties involved in using targeting or
                      advertising cookies in the preceding section (What
                      third-party cookies does FRHS use), the list is not
                      exhaustive and is subject to change. Therefore, even if
                      you choose to turn off all the third-party cookies listed
                      in section (What third-party cookies does FRHS use), you
                      may still receive some tailored advertisements and
                      recommendations. There are a number of ways you can manage
                      what cookies are set on your devices. Essential cookies,
                      however, cannot be disabled. If you do not allow certain
                      cookies to be installed, the website/ mobile application
                      may not be accessible to you and/or the performance,
                      features, or services of the website may be compromised.
                      You can also manage this type of cookie in the privacy
                      settings on the web browser you are using. Please note
                      that if you use your browser settings to block all cookies
                      you may not be able to access parts of our or others'
                      websites/ mobile applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
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

export default Footer;
