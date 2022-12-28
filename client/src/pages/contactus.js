import Navbar from "../components/Navbar";
import "./contactus.css"
import { Button } from '@cred/neopop-web/lib/components';
import Footer from "../components/Home/footer";
import contactus from "./../icons/contactus.svg";
function Contactus() {
  return (
    <>
      
      {/* Anurag code */}
      <body className="contact_us">
      <Navbar />
        <div className="row euro as">
          <div className="col-lg-8 col-sm-12">
            <div className="container-fluid mt-3 boat">
              <div className="hello">CONTACT US </div>
              <div className="names" >
                <input type="text" className="first_name" placeholder="First name..." />
                <input type="text" className="last_name" placeholder="Last name..." />
              </div>
              <p className="email_input">
                <input type="email" className="mail_input" placeholder="Type your mail..." />
              </p>
              <form action="#" className="son">
                <label for="lang" className="H21">Reason for Contacting</label>
                <select name="languages" id="lang" className="levi">
                  <option value="javascript">Sponsorship</option>
                  <option value="php">NO Reason</option>
                  <option value="java">Intern lagwa do</option>

                </select>

              </form>
              <div className="aot">
                <textarea type="text" className="Eren" placeholder="Any message for us?..." />
              </div>
              <br />
              <div className="submit_contactus as">
              <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#D4F34A",borderColor:"#000000",edgeColors:{right:"#FC97D9",bottom:"#FC97D9"}}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <div style={{color:"black"}}>SUBMIT</div>
    </Button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="side_box">
            <img src={contactus} />
            </div>
          </div>
        </div>
<Footer/>
      </body>
    </>

  );
}

export default Contactus;
