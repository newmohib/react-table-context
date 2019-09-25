import React, { Component } from 'react';

const MyContext = React.createContext();


//provider

class MyProvider extends Component {
    state = {
        name: 'mohib',
        age: 20,
        cool: true
    }
    render() {
        return (
            <MyContext.Provider value={{
               state: this.state,
               addAge:(key,value)=>{
                   console.log(key,value);
                   this.setState({
                       age:this.state.age +1,
                       [key]:value
                   })
               }
            }} >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}


//Deshboard

export class Deshboard extends Component {
    state = {}
    render() {
        return (
            <MyProvider>
                <div>
                    <Home></Home>
                    
                </div>
            </MyProvider>
        );
    }
};



//Home

class Home extends Component {
    state = {}
    render() {
        return (
            <div>

            <MyContext.Consumer >
                {(context) => {
                   
                    console.log(context.state);
                  return (
                      <div>
                           <h1>{context.state.age}</h1>
                          {context.state.country && <h1>{context.state.country}</h1>}
                           <button onClick={()=>context.addAge("country","Bangladesh")} >add agg</button>
                      </div>
                  )
                }

                }

            </MyContext.Consumer>
            <Profile></Profile>
            </div>
            
        );
       
    }
};


//Home

class Profile extends Component {
    state = {}
    render() {
        return (
            <MyContext.Consumer >
                {(context) => {
                    
                    console.log(context.state);
                  return (
                      <div>
                           <h1>{context.state.age}</h1>
                          {context.state.country && <h1>{context.state.country}</h1>}
                           <button onClick={()=>context.addAge("country","Bangladesh")} >add agg</button>
                      </div>
                  )
                }

                }

            </MyContext.Consumer>
        );
       
    }
};




export default Profile;