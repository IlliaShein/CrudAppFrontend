import React from 'react';

const EditingPersonItemSegment = ({ label, value, onChange }) => {
  return (
    <div>
      {label}: <input className='myInput' value={value} onChange={onChange} />
    </div>
  );
};

export default EditingPersonItemSegment;