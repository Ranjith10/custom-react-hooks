import  React from  'react'
import { Route, Redirect } from  'react-router-dom'

    //* Trivial Method
    //* On successful login - retrieve JWT token
    //* Store JWT token in httpOnly cookie or localStorage
    //* Setup a `request interceptor` using axios
    //* Using the `request interceptor` add JWT token in the header of every API call
    //* If JWT token is valid, you either get results/errors
    //* Define a error code for invalid JWT , say 402, use only for invalid JWT
    //* Setup `response interceptor` using axios
    //* Using `response interceptor` redirect to login page for 402

    //* performValidationHere
    //* Have a context value - boolean 
    //* Use the context boolean for validation 

const  PrivateRoute = ({component: Component, ...rest}) => {

    const condition = performValidationHere()

    return (
        <Route 
            {...rest}
            render = {
                (routeProps) => (
                    condition
                        ?  
                            <Component {...routeProps} {...rest} />
                        :
                            <Redirect to = '/login' />
                )
            }
        />
            
    )
}
export  default  PrivateRoute