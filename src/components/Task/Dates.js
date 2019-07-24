import React from 'react';

import Helper from 'services/helper';

import InputDate from 'components/UI/Input/Date/';

const TaskDates = (props) => {
  const { task, updateParentTaskState } = props;

  const updateDeadline = (deadline) => {
    updateParentTaskState({ ...task, deadline });
  };

  return (
    <div className="TaskDates mt-5">
      <p className="text-muted">Dates</p>
      <hr className="featurette-divider" />

      <div className="form-group row">
        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Created</label>
          <div className="col-12">
            <input
              type="text"
              name="created"
              className="form-control"
              value={Helper.formatDateTime(task.created || Date.now())}
              disabled
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Updated</label>
          <div className="col-12">
            <input
              type="text"
              name="updated"
              className="form-control"
              value={Helper.formatDateTime(task.updated)}
              disabled
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <label className="col-12 col-form-label">Deadline</label>
          <div className="col-12">
            <InputDate name="deadline" startDate={task.deadline} updateParent={updateDeadline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDates;
