import React from "react";

const Announcement = (props) => {
    const winningTeam = props.homeScore > props.awayScore ? "LIONS" : "TIGERS";
    const scoreDiff = Math.abs(props.homeScore - props.awayScore);
    
    return(
        <div className="scoreboard">
            <h1 className="topRow">{winningTeam} team is winning by {scoreDiff}</h1>
        </div>
    )
}

export default Announcement;