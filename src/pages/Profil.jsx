import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import '../styles/pagesstyles/Form.scss';
import axios from 'axios';
import SignIn from '../component/SignIn';
import '../styles/pagesstyles/Profil.scss'

const Profil = () => {
    
    const authContext = useContext(AuthContext);
    const [data, setData] = useState([]);
    useEffect(() => {
               axios
        .get('http://localhost:7500/api/user')
                            .then(res => setData(res.data))

    },[data])
   
    return (
        <div className="main-content">

  
            <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div className="container-fluid">

        <NavLink to='#' className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"  target="_blank">User profile</NavLink>
        
      
       
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="../assets/media/5.jpg" />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
            </nav>
            {/* header */}
               <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
    
      <span className="mask bg-gradient-default opacity-1"></span>
    
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white">ADINSI ABDIAS</h1>
            <p className="text-white mt-0 mb-5">Deep social network est un site d??di?? au jeune professionnel de l'??glise biblique de la vie profonde. L'usage de ce site ?? caract??re douteux seras bannir du plateforme d??finitivement et poursuivi en cas de faute majeure.</p>
            <a href="#!" className="btn btn-info">Edit profile</a>
          </div>
        </div>
      </div>
            </div>
            
            {/* /page */}
         <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img style={{borderRadius:"50%"}} width={180} height={180} src="../assets/media/5.jpg"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Followers</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Following</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Post</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Adinsi Abdias
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Benin
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Devellopeur web Front-end
                </div>
                {/* <div>
                  <i className="ni education_hat mr-2"></i>University of Computer Science
                </div> */}
                <hr className="my-4"></hr>
                <p>L'??glise possedent des plateformes divers pour l'??dification de l'ame.</p>
                <a href="#">consulter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Mon compte</h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary">param??tres</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div>
                <h6 className="heading-small text-muted mb-4">Profil Information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-username">Nom complet</label>
                        <p  id="input-username" className="form-control form-control-alternative"  >Adinsi Abdias</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" for="input-email">Email</label>
                        <p id="input-email" className="form-control form-control-alternative" >adinsiabdias@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-first-name">Groupe</label>
                        <p type="text" id="input-first-name" className="form-control form-control-alternative" >Groupe de Zogbo</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-last-name">Activit??</label>
                        <p  id="input-last-name" className="form-control form-control-alternative" >Devellopeur web front-end</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <h6 className="heading-small text-muted mb-4">Description</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>Qui suis-je ?</label>
                    <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">Passionn?? par les m??tiers du d??velloppemnet web ....</textarea>
                  </div>
                </div>
                <h6 className="heading-small text-muted mb-4">Contactez les administrateurs du site</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-address">Email</label>
                        <p id="input-address" className="form-control form-control-alternative" placeholder="Home Address"  >vieprofondebenin@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-city">Tel:</label>
                        <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="67919150" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-country">Facebook</label>
                        <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="vie profonde benin" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" for="input-country">Youtube</label>
                        <input type="text" id="input-postal-code" className="form-control form-control-alternative" placeholder="DCLM Fran??ais" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
            {/* footer */}
             {/* <footer className="footer">
    <div className="row align-items-center justify-content-xl-between">
      <div className="col-xl-6 m-auto text-center">
        <div className="copyright">
          <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">Argon Dashboard</a> by Creative Tim</p>
        </div>
      </div>
    </div>
  </footer> */}
  </div>
    
      
    );
};

export default Profil;