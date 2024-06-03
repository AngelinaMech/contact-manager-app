import React from 'react';
import {Link} from 'react-router-dom';



let ContactList = () => {
  return (
    <React.Fragment>
      
      
        <section className="contact-search p-3">
          <div className="container">
            <div className='grid'>
              <div className='row'>
                <div className='col'>
                  <p className="h3">Contact Manager
                  <Link to={'/contacts/add'} className="btn btn-primary ms-2"> 
                  <i className='fa fa-plus-circle me-2'></i>
                  NEW</Link>
                  </p>
                  <p className='fst-italic'>Welcome to My Contact Managing App! You can now Save, View, Edit and Delete Your Contacts.</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <form className='row'>
                    <div className='col'>
                    <div className='mb-2'>
                      <input type="text" className='form-control' placeholder="Search Contacts"/>
                    </div>
                    </div>

                    <div className='col'>
                    <div className='mb-2'>
                      <input type="submit" className='btb btn-outline-dark' value="Search"/>
                    </div>

                    </div>
          
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </section>
   
    <section className='contact-list'>
          <div className='container'>
            <div className='row'>            
                    <div className='col-md-6'>
                    <div className='card'>
                      <div className='card-body'>
                        <div className='row align-items-center d-flex justify-content-around p-3 m-1'>
    
                        <div className="col-md-4">
                          <img src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=178&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="" className='contact-img'/>
                          </div> 
    
                        <div className="col-md-7">  
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
                        </ul>
                          </div>
    
                          <div className="col-md-1">
                            <Link to ={'/contacts/view/:contactId'} className='btn btn-warning my-2'>
                              <i className='fa fa-eye'></i>
                            </Link>
                            <Link to ={'/contacts/edit/:contactId'} className='btn btn-primary my-2'>
                              <i className='fa fa-pen'></i>
                            </Link>
                            <button className='btn btn-danger my-2'>
                              <i className='fa fa-trash'></i>
    
                            </button>
                            </div>                  
    
                      </div>
    
                      </div>
    
                    </div>
    
                  </div>                     

            </div>

          </div>

        </section>        
    </React.Fragment>
  )
};

export default ContactList;