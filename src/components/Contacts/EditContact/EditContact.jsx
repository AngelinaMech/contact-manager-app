import React from 'react';
import {Link} from 'react-router-dom';
let EditContact = () => {
  return (
    <React.Fragment>
        <section className='add-contact p-3'> 
          <div className="container">
            <div className="row">
              <div className="col">
                <p className='h4 text-primary fw-bold'>Edit Contact</p>
                <p className='fst-italic'>Welcome to the Edit Contact Page!</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <form>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Name'/>
                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Photo Url'/>
                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Phone Number'/>
                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Email'/>
                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Company'/>
                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Title'/>
                  </div>
                  <div className="mb-2">
                    <select className='form-control'>
                      <option value="">Select a Group</option>
                      </select> 
                  </div>
                  <div className='mb-2'>
                    <input type="submit" className='btn btn-primary' value="Update"></input>
                    <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                  </div>
                </form>
              </div>
              <div className='col-md-6'>
                <img src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=178&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="" className='contact-img'/>

              </div>

            </div>
          </div>

        </section>
    </React.Fragment>
  )
};

export default EditContact;