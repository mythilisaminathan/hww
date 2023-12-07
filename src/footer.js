import './App.css';
const Footer = () => {
    return(
      <div   className='container-fluid'>
        <footer className='footer container-fluid ' id='contactus'>
        <div className='container p-5 text-dark row max-auto '>
          <div className="footer1 col-12 mb-3 col-md-4">
            <h3 className="mb-2  contactfont" >Contact</h3>
            <p className='con'>HAPPY WELL WISHERS <br />
              Bangalore <br />
              Karnataka, IN 560068</p>

          </div>

          <div class="footer1 col-12 mb-3 col-md-4 pt-3" >

            <p className="con ">+91 63666 66444 <br />
              Email info@happywellwishers.com  <br />
              Book a Consulation  <br /></p>

            <iconify-icon className="fs-4 " icon="mdi:instagram"></iconify-icon>
            <iconify-icon className="P-4 " icon="ic:baseline-facebook"></iconify-icon>
            <iconify-icon className="P-4 " icon="mdi:youtube"></iconify-icon>

          </div>
          

          <div class="footer11 col-12 mb-3 col-md-4 pt-2">
            <p class="fs-5">Subscribe to my Newsletter</p>
            <input className="w-75 p-1 mb-2" type="email" name="email" placeholder="Enter Your email here*" />
            <button className=" joinbtn m-1 p-1 bg-dark rounded-0 text-white ">Join</button>

          </div>
        </div>

      </footer>
      </div>

    );
}
export default Footer;