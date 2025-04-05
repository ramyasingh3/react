import React from "react"
import UnorderedList from "../components/UnorderedList";
import Title from "../components/Title";

function About(){
    return (
        <div>
            <Title name="Node js guides" contact="542" school="DPS" college="JSS" roll="232" bus="21"/>
            {/* <UnorderedList /> */}
            <Title name="General"/>
            <Title name="Node js Core concepts"/>
        </div>
    )
}

export default About;