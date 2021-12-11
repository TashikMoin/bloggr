import React, {useState} from "react";
import PostStyling from "../styles/Post/Post.module.css"


const Blog = () => {
 

  return (
    <div className={PostStyling.container}>
        <div className={PostStyling.postcontainer}>

            <div className={PostStyling.postheader}>

                <div className={PostStyling.imagecontainer}>
                    <img src="/public/logo.png" alt=""></img>
                </div>

                <div className={PostStyling.headingcontainer}>
                    <h1 className={PostStyling.heading}> Blog </h1> 
                    <div className={PostStyling.teachername}> Rauf Ahmed Shams Malick • Oct 31 </div>
                    {/* teachername + date  //media query to be written */}
                </div> 

            </div>

            <div className={PostStyling.postcontent}>
                <p className={PostStyling.content}>
                </p>
            </div>

            

        </div>
    </div>
  );
};


export default Blog;