import React from 'react';
import './Styles/Navigation.scss'
import { DROPDOWN_OPTIONS } from '../Constants/AppConstants'

const Navigation = () => {
    return (
    <div className="navigation-overview">
      {DROPDOWN_OPTIONS.map(item => {
        let Icon = item.icon
        return (
          <div>
            <Icon />
            <div className="label">{item.name}</div>
          </div>
        )
      })}
    </div>
  );
};

export default Navigation;