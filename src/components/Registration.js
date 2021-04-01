import {Component} from 'react';
import {
    Link
} from "react-router-dom";

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            user:{
                email:null,
                password: null
            }
          }
        
    }

    toggleLoading=()=>{
        this.setState({
            loading: !this.state.loading
        })

        console.log(this.state)
    }
    submit = ()=>{
        this.toggleLoading()
    }
    updateNames = (e)=>{
        this.setState((state)=> {return {...this.state.user,name:e.target.value}})
    }
    updateEmail = (e)=>{
        this.setState((state)=> {return {...this.state.user,email:e.target.value}})
    }

    updatePassword = (e)=>{
        this.setState((state)=> {return {...this.state.user,password:e.target.value}})
    }

    isLoading = ()=>{
        return this.state.loading
    }
    render() { 
        return ( 

            <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.submit} action="">
                <div className="text-xl font-bold mb-3">
                    Inscription
                </div>
                <div className="mb-4">
                   
                    <input disabled={this.state.isLoading} onChange={this.updateNames} 
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="first_name" type="text" placeholder="Nom et Prénom(s)" />
                </div>
                <div className="mb-4">
                   
                    <input disabled={this.state.isLoading} onChange={this.updateEmail} 
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Adresse email" />
                </div>
                <div className="mb-6">
                    
                    <input disabled={this.state.isLoading} onChange={this.updatePassword} className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                {!this.state.loading ?
                    <div>

                        <div className="flex items-center justify-between mb-4">
                            <button onClick={this.submit} type="submit" className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                S'inscrire
                                </button>
                            
                            <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="#">
                                Forgot Password?
                                </a>
                        </div>
                        <div>
                            <Link to="login" className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">Connexion</Link>
                        </div>

                    </div>
                    :

                    <div className="py-2 px-4 bg-gray-50 rounded-full">
                        <span>
                        Loading...
                        </span>
                        <span>
                            
                        </span>
                    </div>

                }
                
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
        );
    }
}
 
