import React from "react";
import "./Skills.css";
import Design from "../../img/business-development-concept-vector-5613731.jpg";
import {
  UilReact,
  UilHtml5,
  UilCss3Simple,
  UilVuejs,
  UilJavaScript,
  UilGithub,
} from "@iconscout/react-unicons";

export default function Skills() {
  return (
    <div className="s" id="s">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Design}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">My Skills</h1>
        <p className="a-sub">PROGRAMMING LANGUAGES & TOOLS</p>
        <ul>
          <li>
            <UilReact />
          </li>
          <li>
            <UilHtml5 />
          </li>
          <li>
            <UilCss3Simple />
          </li>
          <li>
            <UilVuejs />
          </li>
          <li>
            <UilJavaScript />
          </li>
          <li>
            <UilGithub />
          </li>
          <li>
            <img src="https://img.icons8.com/windows/32/null/node-js.png"/>
          </li>
        </ul>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">WORKFLOW</h4>
            <ul>
              <li>
                Font-end Web development(Reactjs, vuejs,...)
              </li>
              <li>
                Mobile-First, Responsive Design
              </li>
              <li>
                Backend-Web development
              </li>
              <li>
                Cross Browser Testing & Debugging
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
