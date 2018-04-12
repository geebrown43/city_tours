import React from 'react'
import { Nav, Banner, Content } from "../components/banner";
class Home extends React.Component{
render(){
    return (
        <div>
            <Nav />
            <Banner />
            <Content />
        </div>
    )
}
}


export default Home