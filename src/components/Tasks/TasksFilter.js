import React from 'react'
import { Navlink } from 'react-router-dom'

export const TasksFilter = props => (
  <div className="TasksFilter mt-4">
    <nav class="nav nav-pills">
      <a class="nav-item nav-link active" href="#">
        To do <span class="badge badge-light">4</span>
      </a>
      <a class="nav-item nav-link" href="#">
        Development <span class="badge badge-light">2</span>
      </a>
      <a class="nav-item nav-link" href="#">
        Code review <span class="badge badge-light">0</span>
      </a>
      <a class="nav-item nav-link" href="#">
        Bugfix <span class="badge badge-light">1</span>
      </a>
      <a class="nav-item nav-link" href="#">
        Testing <span class="badge badge-light">3</span>
      </a>
      <a class="nav-item nav-link" href="#">
        Done <span class="badge badge-light">19</span>
      </a>
    </nav>
  </div>
)
