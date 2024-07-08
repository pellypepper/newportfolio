

export default function About (){

    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = '/assets/newbg3.jpeg'; // Set the path to your file here
        link.download = 'newbg3.jpeg'; // Set the file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div className="about-container">
              <div className="about-header">
              <h1>About Me</h1>
                <span>My Introduction</span>
              </div>
            <div className="about-wrapper">
                 <div className="about-left">
                     <div className="box"></div>
                 </div>
                
                <div className="about-right">
                    <p>Hello, Im Pelly, a Front-End Developer, with extensive knowledge experience, working in web technolofies and UI/UX design, delivering quality work. Im currrently available for freelance work , if you have a project that you want to get started with or think you need my help with something, then get in touch.</p>
                    <div className="small-text-wrapper">
                         <div className="small-text">
                             <h5>02+</h5>
                             <span>Years</span>
                             <p>Experience</p>
                         </div>
                         <div className="small-text">
                             <h5>01+</h5>
                             <span>Years</span>
                             <p>Experience</p>
                         </div>
                         <div className="small-text">
                             <h5>10+</h5>
                             <span>Years</span>
                             <p>Experience</p>
                         </div>
                    </div>
                    
                    <button onClick={handleDownload}>Download File</button>



                </div>
            </div>
        </div>
    )
}