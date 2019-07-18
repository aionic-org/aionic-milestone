import React from 'react';
import InputSelect from 'components/UI/Input/Select';

const UserSelectsActive = (props) => {
  const status = [{ value: false, title: 'False' }, { value: true, title: 'True' }];

  return (
    <div className="UserSelectsActive">
      <InputSelect
        optionList={status}
        name="active"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        required={true}
        showDefault={false}
        disabled={props.disabled}
      />
    </div>
  );
};

UserSelectsActive.defaultProps = {
  statusList: [],
  defaultValue: '',
  disabled: false
};

export default UserSelectsActive;
