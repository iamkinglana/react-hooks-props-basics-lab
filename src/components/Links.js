import React from "react";
import user from "../data/user";



function Links(){
    return(
    <div>
    <h3>Links</h3>
    <a href={user.links.github}>Github</a>
    <a href={user.links.linkedin}>LinkedIn</a>

    </div>
    )


}

export default Links;