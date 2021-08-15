import React from "react";

const Hero = ({handleLogout}) => {
    return(
        <section className='hero'>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <p>It's my GitHup project <a target='_blank' href='https://github.com/burakcanexe'>Burak Can Yıldırım</a></p>
            
        </section>
    )
};

export default Hero;