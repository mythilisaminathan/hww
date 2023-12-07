import './App.css';
import ban3 from './ban3.jpeg';
const Section = () => {
    return (
        <div className='container-fluid'>
            <div className=' container-fluid  sec1 p-5'>
                <div className='container abt2 '>
                    <div className='col-6 bg-white sec2 p-2 position-relative'>


                        <p className="hww  p-5 "><h2 className=' text-left abt '>About</h2>
                            HAPPY WELL WISHERS provides an enriched learning
                            environment that has helped countless students get
                            ahead. Our unparalleled teaching methods help
                            participants prepare for the next step in their career
                            and broaden their horizons. Since opening our doors
                            in 2000, weve worked hard on expanding our
                            curriculum to meet the needs of emerging industries.
                            Get in touch with us today to ﬁnd out how we can help
                            you.</p>


                        <div className='img1 position - absolute  '>
                            <img src={ban3} alt='ban3' className='img11 ' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Section;