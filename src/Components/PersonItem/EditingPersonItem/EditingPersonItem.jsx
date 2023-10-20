import React, { useState } from 'react';
import MyButton from '../../UI/Button/MyButton';
import EditingPersonItemSegment from './EditingPersonItemSegment';

const EditingPersonItem = ({ person, Save, Cancel }) => {
  const [personData, setPersonData] = useState({ ...person });

  const processChanges = (e, fieldName) => {
    const updatedPersonData = { ...personData, [fieldName]: e.target.value };
    setPersonData(updatedPersonData);
  };

  const save = () => {
    Save(personData);
  };

  return (
    <div className="person">
      <div style={{ flexDirection: 'column', alignItems: 'start' }}>
        <EditingPersonItemSegment label="First name" value={personData.firstName} onChange={(e) => processChanges(e, 'firstName')} />
        <EditingPersonItemSegment label="Last name" value={personData.lastName} onChange={(e) => processChanges(e, 'lastName')} />
        <EditingPersonItemSegment label="Age" value={personData.age} onChange={(e) => processChanges(e, 'age')} />
        <EditingPersonItemSegment label="Description" value={personData.description} onChange={(e) => processChanges(e, 'description')} />
      </div>
      <div className="person__btns">
        <MyButton onClick={save}>Save</MyButton>
        <MyButton onClick={Cancel}>Cancel</MyButton>
      </div>
    </div>
  );
};

export default EditingPersonItem;