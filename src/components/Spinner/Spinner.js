import React from 'react';
import SpinnerImg from '../../assets/img/loading.gif';
let Spinner = () => {
  return (
    <React.Fragment>
        <img src={SpinnerImg} alt="" className='d-block m-auto' style={{width:'500px'}}/>

    </React.Fragment>
    
  )
};

export default Spinner;