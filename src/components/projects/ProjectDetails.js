import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Project Title - { id } </span>
          <p> This is the text of the project. Soon we're going to be adding some crazy stuff here. </p>
        </div>

        <div className="card-action grey-text text-lighten-1">
        <div>Posted by The Net Ninja</div>
          <div>Feb 1, 2am</div>
        </div>
      </div>
    </div>
  )
}
