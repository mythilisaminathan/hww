
import './App.css';
import download from './download.png';
import Button from './btn.js';

const Banner2 = () => {
  return (
    <div className='container-fluid'>
    <div className="container-fluid bigbox">

      <h3 className='text-white text-center'>Services</h3><br />
      <div className="row p-5 text-center text-white ">
        <div className=" box1 col-4">
          <img src={download} alt='file' className='img111 mb-4' />
          <p ><span className='span1 fw-bold text-left '>Services</span></p>
          <hr />
          <p className='para  text-white'>1hr<br /><br />$19.90</p>
          <Button />
          
        </div>

        <div className=" box2 col-4 ">
          <img src={download} alt='file' className='img111 mb-4' />
          <p ><span className='span1 fw-bold text-left '>Services</span></p>
          <hr />
          <p className='para'>1hr<br /><br />$19.90</p>
          <Button />
        </div>

        <div className="box3 col-4">
          <img src={download} alt='file' className='img111 mb-4' />
          <p ><span className='span1 fw-bold text-left'>Services</span></p>
          <hr />
          <p className='para '>1hr<br /><br />$19.90</p>
          <Button />
        </div>


      </div>

    </div>
    </div>
  );
}
export default Banner2;