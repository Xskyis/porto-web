import './button.css'

function Buttons() {    
    return (    
        <div className="container button-container"> 
            <a href="#about" className='btn pri'>   
                Learn more
            </a>
            <a href="#contact" className='btn sec'> 
                Contact Me
            </a>
        </div>
    );
}

export default Buttons;