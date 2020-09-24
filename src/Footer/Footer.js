import React from "react";
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import MentionLegale from "./MentionLegale";
import LogoFooter from "./LogoFooter";
import './Footer.css';

const Footer=()=>{

    const icones=[facebook,twitter,linkedin];

    const afficheur=icones.map((any, index)=>
    <div className="Footer" key={index}><img src={any} alt="réseaux sociaux"/></div>);
    return (
        <div className="FooterGlobal">

       <div className="Afficheur">{afficheur}</div>

       <div className="LogoMentions">
        <LogoFooter/>
       <MentionLegale/>
       </div>

       </div>
    )
}

export default Footer;