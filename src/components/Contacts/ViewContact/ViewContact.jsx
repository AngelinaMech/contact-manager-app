import React from 'react';
import {Link} from 'react-router-dom';
let ViewContact = () => {
  return (
    <React.Fragment>
        <section className='view-contact p-3'>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className='h3 text-warning fw-bold'>View Contact</p>
                <p className='fst-italic'>Welcome to the View Contact page!</p>
              </div>
            </div>
          </div>
        </section>
        <section className='view-contact mt-3'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=178&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="" className='contact-img'/>

              </div>
              <div className="col-md-8">
              <ul className="list-group">
                      <li className='list-group-item list-group-item-action'>
                        Name:<span className='fw-bold'>Sid</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Mobile No:<span className='fw-bold'>8822054816</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Email:<span className='fw-bold'>siddarthbaruah39@gmail.com</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Company:<span className='fw-bold'>siddarthbaruah39@gmail.com</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Title:<span className='fw-bold'>siddarthbaruah39@gmail.com</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Group:<span className='fw-bold'>siddarthbaruah39@gmail.com</span>
                      </li>
                    </ul>

              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
};

export default ViewContact;