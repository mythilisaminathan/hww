import ban2 from './ban2.jpg';
import Banner2 from './banner2.js';
import Section from './section.js';
import './App.css';
import Button from './btn.js';
const Banner1 = () => {
    return (
        <>
        <div class="container-fluid file">
            <img src={ban2} alt='ban' width='100%' className='head1' />
            <div className="text">
            <h2 className=" font-ban"> Welcome to HAPPY WELL
                WISHERS</h2><br />
            <p>
                <span >Endless Possibilities</span>
                <br /><br />
                <Button />
            </p>
            </div>

            <div className='head2'></div>

        </div>
        <Section/>
        <Banner2 />
        </>
    );
}
export default Banner1;