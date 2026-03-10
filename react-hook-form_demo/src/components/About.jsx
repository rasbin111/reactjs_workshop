import React from 'react'

const About = ({render}) => {
  return (
    <div>
        <h2> About Section </h2>
        {render("A very good tutorial")}
    </div>
  )
}

export default About