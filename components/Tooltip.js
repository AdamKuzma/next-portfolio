import React from 'react';

const Tooltip = ({ visible, text }) => {
    return (
      <div className={`tooltip ${visible ? 'visible' : ''}`}>
        {text}
      </div>
    );
};

export default Tooltip;