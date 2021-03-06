import React from "react";

export class Header extends React.Component{
    render() {
        return(          
                <nav>
                  <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><a href="#">Home</a></li>
                      <li><a href="badges.html">Components</a></li>
                      <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                  </div>
                </nav>
        );
    }
}