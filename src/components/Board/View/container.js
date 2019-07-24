import React from 'react';

import Fetcher from 'components/Utility/Fetcher';

import Board from '.';

const BoardContainer = (props) => (
  <Fetcher url="task-status">
    {(status) => {
      const { userList } = props;

      return (
        <div className="BoardContainer">
          <Board userList={userList} statusList={status} />
        </div>
      );
    }}
  </Fetcher>
);

export default BoardContainer;
