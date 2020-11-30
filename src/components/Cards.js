import React, {Component} from 'react';

class Card extends Component{
    render(){
        return(
            <div>
                <div className="cardsdiv">
                    <h1 className="hometitle">Checkout Some of my projects below</h1>

                    <hr></hr>
                    
                    <div className="cardBorder">
                        <a href="https://young-coast-10856.herokuapp.com/" >
                            <div className="cardMargin">
                                <h3 className="homeTitle">
                                    Lyrical
                                </h3>
                            </div>
                            <div className="card lyricalproject">
                            </div>
                            <h3 className="projectDescription">
                                Project built with Ruby on Rails
                            </h3>
                        </a>
                    </div>


                    <div className="cardBorder">
                        <a href="https://simmer.io/@Jahkobe/lumber-jack-man" >
                            <div className="cardMargin">
                                <h3 className="homeTitle">
                                    LumberJack Man
                                </h3>
                            </div>
                            <div className="card lumberjackmanproject">
                            </div>
                            <h3 className="projectDescription">
                                Project built with C# and Unity
                            </h3>
                        </a>
                    </div>


                    <div className="cardBorder">
                        <a href="https://github.com/GabRom-187/Libation_Station" >
                            <div className="cardMargin">
                                <h3 className="homeTitle">
                                    Libation Station
                                </h3>
                            </div>
                            <div className="card libationstationproject">
                            </div>
                            <h3 className="projectDescription">
                                Project built with Express and React
                            </h3>
                        </a>
                    </div>


                    <div className="cardBorder">
                        <a href="https://simmer.io/@Jahkobe/square-destroyer" >
                            <div className="cardMargin">
                                <h3 className="homeTitle">
                                    Square Destroyer
                                </h3>
                            </div>
                            <div className="card squaredestroyerproject">
                            </div>
                            <h3 className="projectDescription">
                                Project built with C# and Unity
                            </h3>
                        </a>
                    </div>


                    <div className="cardBorder">
                        <a href="https://outdoors-gear-hub-frontend.herokuapp.com/" >
                            <div className="cardMargin">
                                <h3 className="homeTitle">
                                    Outdoors Gear Hub
                                </h3>
                            </div>
                            <div className="card outdoorsproject">
                            </div>
                            <h3 className="projectDescription">
                                Project built with Ruby on Rails and React
                            </h3> 
                        </a>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Card;