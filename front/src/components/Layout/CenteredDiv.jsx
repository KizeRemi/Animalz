import React from 'react';
import classNames from 'classnames';

import './CenteredDiv.css';
import { func } from 'prop-types';

const CenteredDiv = ({ children, className, ...props }) => (
  <div className={classNames('centered-bloc', className)} {...props}>
    {children}
  </div>
);

CenteredDiv.propTypes = {
  children: func.isRequired,
};

export default CenteredDiv;
