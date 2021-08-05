import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
          <hr style = {{width:"90%",marginTop:20}}/>
             <p className="name">Created by Vaishnavi &#128512; </p>
              <div className = "iconContainer">
                  <a href = "https://www.instagram.com/delish_shell/" target = "_blank">
                      <i className = "fab fa-instagram-square fa-2x"></i>
                  </a>
                  <a href = "https://www.linkedin.com/in/vaishnavi22" target= "_black">

                      <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a href="https://www.facebook.com/vaishnavi.chourasia.9/" target = "_blank">
                      <i className="fab fa-facebook fa-2x"></i>   
                  </a>

              </div>
        </div>
    )
}

export default Footer
