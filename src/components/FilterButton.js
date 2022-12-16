import React from 'react'

export default function FilterButton(props) {
  return (
    <div>
        <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          show all tasks
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
        Show Active Tasks
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          Show completed Tasks
        </button>
      </div>
    </div>
  )
}
