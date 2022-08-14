import React from "react";
import { useDeviceType} from "./useDeviceType";
import './App.css';


const Home = () => {
    const { isMobile,isTablet } = useDeviceType()

    return (
        <>
        {isMobile ? (
            <div className="mainwell">
                <h1>Home</h1>
                <div className="mobileMainContainer">
                    <p>This resource has a ton of different options at many different price points that hopefully can serve as a launching pad for shopping for your outfit. This is by no means exhaustive and do not feel at all like you have to choose something from this resource. </p>
                    <p>Also, all of the dresses/suits/etc. provided are under the guise that you will acessorize and bring your own pizzaz to your outfit. I've created a powerpoint with more examples as well that can be used as a tool to help get a better idea of what exactly we're looking for. Black suits are totally ok as long as you have something to spice it up.</p>
                    <p>The <a className="inlineLink" href="https://pin.it/2JkxgZI">guest dress code pinterest board</a> can also be used as a resource and a vibe check as you're finding what you think will suit you best.</p>
                    <p>Love you lots! Happy shopping!</p>
                    <p>Kate and Tay</p>
                </div>
            </div>            
        ): null}

        {isTablet ? (
            <div className="mainwell">
                <h1>Home</h1>
                <div className="mobileMainContainer">
                    <p>This resource has a ton of different options at many different price points that hopefully can serve as a launching pad for shopping for your outfit. This is by no means exhaustive and do not feel at all like you have to choose something from this resource. </p>
                    <p>Also, all of the dresses/suits/etc. provided are under the guise that you will acessorize and bring your own pizzaz to your outfit. I've created a powerpoint with more examples as well that can be used as a tool to help get a better idea of what exactly we're looking for. Black suits are totally ok as long as you have something to spice it up.</p>
                    <p>The <a className="inlineLink" href="https://pin.it/2JkxgZI">guest dress code pinterest board</a> can also be used as a resource and a vibe check as you're finding what you think will suit you best.</p>
                    <p>Love you lots! Happy shopping!</p>
                    <p>Kate and Tay</p>
                </div>
            </div>            
        ): null}

        {!isMobile && !isTablet? (
            <div className="mainwell">
                <h1>Home</h1>
                <div className="maincontainer">
                    <div>
                        <p>This resource has a ton of different options at many different price points that hopefully can serve as a launching pad for shopping for your outfit. This is by no means exhaustive and do not feel at all like you have to choose something from this resource. </p>
                        <p>Also, all of the dresses/suits/etc. provided are under the guise that you will acessorize and bring your own pizzaz to your outfit. I've created a powerpoint with more examples as well that can be used as a tool to help get a better idea of what exactly we're looking for. Black suits are totally ok as long as you have something to spice it up.</p>
                        <p>The <a className="inlineLink" href="https://pin.it/2JkxgZI">guest dress code pinterest board</a> can also be used as a resource and a vibe check as you're finding what you think will suit you best.</p>
                        <p>Love you lots! Happy shopping!</p>
                        <p>Kate and Tay</p>
                    </div>
                    <div>
                        <img className="kateandtay" src="./images/kate&tay.jpeg" alt=''></img>
                    </div>    
                </div>
            </div>
        ): null}
        </>
    );
}

export default Home;
