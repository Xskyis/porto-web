import './button.css'

function Buttons() {    
    return (    
        <div className="container button-container"> 
            <a href="#members" className='btn pri'>   
                Learn More
            </a>
            <a href="#contact" className='btn sec'> 
                Contact Me
            </a>
        </div>
    );
}

export default Buttons;