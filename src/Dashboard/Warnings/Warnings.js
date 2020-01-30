import React, { useState, useEffect } from 'react';
//Redux Imports
import { useSelector } from 'react-redux';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
//util imports
import { getTotals } from '../../util/util';

const Warnings = () => {
  const dashboard = useSelector(state => state.dashboard);

  const { totalRemaining } = getTotals(dashboard);

  const [warning, setWarning] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (totalRemaining < 0) {
      setWarning('Careful, you are over your set budget!');
      setShowWarning(true);
    } else {
      setWarning('');
      setShowWarning(false);
    }
  }, [totalRemaining]);

  const handleClose = () => {
    setShowWarning(false);
    setWarning('');
  };

  return (
    <div className={showWarning === false ? 'warning hide' : 'warning'}>
      <h3>{warning}</h3>
      <FontAwesomeIcon icon={faTimesCircle} onClick={handleClose} />
    </div>
  );
};

export default Warnings;
