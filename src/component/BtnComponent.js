import React, { useState } from "react";

const BtnComponents = props => {

    const [ homeScore, setHome ] = useState(0);
    const [ awayScore, setAway ] = useState(0);

    return(
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons__touchdown" onClick={() => setHome(homeScore + 7)}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={() => setHome(homeScore + 3)}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={() => setAway(awayScore + 7)}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={() => setAway(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    )
    
}

export default BtnComponents;