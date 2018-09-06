import React from 'react'
import { Navlink } from 'react-router-dom'

export const TasksFilter = props => (
  <div className="TasksFilter mt-4">
    <nav className="nav nav-pills">
      <a className="nav-item nav-link active" href="#">
        Open <span className="badge badge-light">4</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Development <span className="badge badge-light">2</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Code review <span className="badge badge-light">0</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Bugfix <span className="badge badge-light">1</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Testing <span className="badge badge-light">3</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Done <span className="badge badge-light">19</span>
      </a>
    </nav>
  </div>
)
