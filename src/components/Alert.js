import React from 'react'

function Alert(props) {
    /* const capt=(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    } */
  return (
    // either alert show or null
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>:{props.alert.msg}
    
</div>
  )
}

export default Alert
