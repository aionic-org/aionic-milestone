/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const Navs = (props) => {
  const { tabs, handleClick, preselectTabIdx } = props;
  const [activeTab, setActiveTab] = useState(preselectTabIdx);

  const handleTabChange = (e) => {
    const pos = Number(e.target.dataset.pos);

    if (pos === activeTab) {
      setActiveTab(null);
      props.handleClick(null);
    } else {
      setActiveTab(pos);
      handleClick(tabs[pos].name, tabs[pos].id);
    }
  };

  return (
    <div className="Navs">
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li className="nav-item" key={i}>
            <button
              type="button"
              className={`btn btn-link nav-link ${i === activeTab ? 'active' : ''}`}
              onClick={handleTabChange}
              key={i}
              data-pos={i}
              data-id={tab.id}
              disabled={tab.disabled === undefined ? false : tab.disabled}
              href="#"
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navs.defaultProps = {
  tabs: [],
  preselectTabIdx: null
};

export default Navs;
