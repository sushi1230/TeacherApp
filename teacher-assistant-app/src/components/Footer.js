import React from 'react';
function Footer(props) {
  return (
    <footer>
      <h1>{props.date}</h1>
      <p>{props.name}</p>
    </footer> );
}
export default Footer;