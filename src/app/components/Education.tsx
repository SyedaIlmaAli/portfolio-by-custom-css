import "../style/education.css";



function Education(){
    return(
        <main className="education-container">
             <div className="education-container2">
                 {/* top div */}
              <div className="education-header-box">
                <h1 className="education-title">Education</h1>
                <p className="education-des">Trusted by Professionals for Exceptional Quality and Service
                Our clients from various industries trust us to deliver top-notch quality and results. Here&apos;s what they have to say about our work..</p>
              </div>
              {/* boxes div */}
              <div className="education-box-container">
              
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Sir Syed Girl&apos;s College</h2>
                    <span className="uni-stu ">Student</span> <span className="uni-date">Starting 2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name ">Pre-Engineering</h2>
                    <p className="uni-des ">I am pursuing a my intermediate in Pre-Engineering at the prestigious Sir Syed Girls College of Karachi, starting in 2024.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Governor IT Initiative</h2>
                    <span className="uni-stu">Student</span> <span className="uni-date">Starting Feb 2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name">Certified Web 3.0 and metaverse</h2>
                    <p className="uni-des">
                    At the Governor IT Initiative, students explore AI, Metaverse, and Blockchain technologies in an accessible manner. This free program is an excellent opportunity for those interested in these innovative fields.</p>
                </div>
              </div>

              </div> 



              </div>
        </main>
    )
}
export default Education