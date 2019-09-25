import React, { Component } from 'react';

const MyContext=React.createContext();

 class MyProvider extends Component {
    state = { 
        name:'mohib',
        age:20,
        cool:true
     }
    render() { 
        return ( 
            <MyContext.Provider value="i am the value" >
                    {this.props.children}
                    {/* {console.log(this.props.children)} */}
            </MyContext.Provider>
         );
    }
}
export default MyProvider