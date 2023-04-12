import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>
          Contact: rainwater harvesting filter for home and commercial building
          | Rainyfilters
        </title>
        <meta
          name="description"
          content="Looking for a reliable rainwater harvesting filter for your home or commercial building? Rainyfilters offers a wide selection of high-quality filters to ensure your rainwater is clean and safe for use."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/contact-us/enquire"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-168445645-1"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
														  window.dataLayer = window.dataLayer || [];
  														  function gtag(){dataLayer.push(arguments);}
  														  gtag('js', new Date());
															gtag('config', 'UA-168445645-1');
        `,
          }}
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: function googleTranslateElementInit() {
              /* eslint-disable no-new */
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: "pt",
                },
                "google_translate_element"
              );
            },
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '587685655184685');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=587685655184685&ev=PageView&noscript=1"
/>`,
          }}
        />
      </Head>
      <main>
        <div className="App">
          <Header />
          <div className="container-fluid banner enternal">
            <div className="hero-image gtintchbnnrtxt">
              <img src="../../static/images/get-in-touch/enquiryPageBanner.png" />
              {/* <div className="hero-text inthemedia contactg">
                <h1>GET IN TOUCH</h1>
              </div> */}
            </div>
          </div>

          <div className="container-fluid gtintchmain">
            <div className="container">
              <div className="row gtintchrw">
                <div className="col-md-5">
                  <div className="gtintchlft">
                    <h6 className="contacth">
                      <img src="../../static/images/get-in-touch/ic-contact-map-pin@2x.png" />
                      Address
                    </h6>
                    <p className="contacttxt">
                      <h6 className="contacth">Marketing office</h6>
                      Farmland Rainwater Harvesting Systems
                      <br></br> No 648, Ground Floor,
                      <br></br> 11th cross, 7th Block, Jaya Nagar,<br></br>
                      Bengaluru, Karnataka - 560070.
                    </p>

                    <h6 className="contacth">Head Office</h6>

                    <p className="contacttxt">
                      Farmland Rainwater Harvesting Systems
                      <br></br>
                      No. 269/1, Hadihalli Village, Amble Hobli,
                      <br></br>
                      Malalur Gram Panchayat,Malalur Post,
                      <br></br>
                      Chikmagalur Taluk and District - 577133
                      <br></br>
                      Karnataka state,India.
                    </p>

                    <h6 className="contacth">
                      <img src="../../static/images/get-in-touch/ic-contact-phone@2x.png" />
                      Contact
                    </h6>

                    <p className="contacttxt">WhatsApp - 7338033790</p>
                    <p className="contacttxt">Contact No.- 7338033790</p>
                    <p className="contacttxt">Contact No.- 08026766252</p>

                    <h6 className="contacth">
                      <img src="../../static/images/get-in-touch/ic-contact-mail@2x.png" />
                      Email Id
                    </h6>
                    <p className="contacttxt">info@rainyfilters.com</p>
                  </div>
                </div>
                <ContactForm></ContactForm>
              </div>
            </div>

            <div className="contmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124399.56415846804!2d77.60377981261607!3d13.00466928906842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159c95555555%3A0xb1a7c2eb52dc3653!2sRainy!5e0!3m2!1sen!2sin!4v1595857457046!5m2!1sen!2sin"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: "0" }}
              />
            </div>
          </div>

          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
