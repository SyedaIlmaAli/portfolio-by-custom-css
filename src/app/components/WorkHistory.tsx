import "../style/workhistory.css"
// canding  all text
function History(){
    return(
        <main className="education-container">
             <div className="education-container2">
                 {/* top div */}
              <div className="education-header-box">
                <h1 className="education-title">Work History</h1>
                <p className="education-des">I have grown through web development, professional training, and academic achievements with continuous dedication.</p>
              </div>
              {/* boxes div */}
              <div className="education-box-container">
              
             
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Governor IT Initiative</h2>
                    <span className="uni-stu">Student</span> <span className="uni-date">Starting Feb 2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name"> Giaic - Reaching Quarter 2</h2>
                    <p className="uni-des">
                    Through hard work, I progressed to Quarter 2, mastering AI, Metaverse, Blockchain, and tools like Next.js and Tailwind CSS.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Web Development</h2>
                    <span className="uni-stu">Completed</span> <span className="uni-date"> Dec-25-2023</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name"> Web - Journey</h2>
                    <p className="uni-des">I started by learning HTML, CSS, and JavaScript, building websites, freelancing, and working on personal projects to sharpen my skills.</p>
                </div>
              </div>

              </div> 



              </div>
        </main>
    )
}
export default History