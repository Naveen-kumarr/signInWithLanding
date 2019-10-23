import React, { Component } from 'react'
import './Login.css'
import Icon from '../images/icon.jpg'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div>
            <div className="custombackground">
                <div className="row mx-0">
                    <div className="col-md-2">
                    <div className="image_parent">
                    <div className="custom_image">
                    <img src={Icon} style={{height:"150px",width:"150px"}}/>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="text_parent">
                    <div className="custom_text">
                    <h2 className="mb-3">1000 Jobs</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.</p>
                    <p>feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p> 
                    <p>Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-5">

                    <div className="cardParent">
                    <div class="card customcard">
                    <div class="card-body p-3">
                    <h5 class="card-title text-center pb-3">Login</h5>
                    <div className=""></div>
                    <div className="row mx-0 py-4">
                        <div className="col-2 custom_col">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="text" className="cardInput" placeholder="Username"/>
                    </div>
                    </div>
                    <div className="row mx-0">
                    <div className="col-2 custom_col">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="text" className="cardInput" placeholder="Password"/>
                    </div>
                    </div>
                    <div className="row mx-0 pt-4 pb-2">
                    <Link to='/landing' className="mx-auto">
                    <button type="button" className="btn btn-primary mx-auto">SignIn</button>
                    </Link>
                    </div>
                    <div className="row mx-0">
                    <a className="mx-auto decoration" href="#"><p>Forgot Password</p></a>
                    </div>
                    </div>
                    </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        )
    }
}
