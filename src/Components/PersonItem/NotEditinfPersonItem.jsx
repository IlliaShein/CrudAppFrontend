import React from 'react';
import MyButton from '../UI/Button/MyButton';

const NotEditingPersonItem = ({ person, number, onEdit, onRemove }) => {
  return (
    <div className="person">
      <div className="person_content">
        <strong>№{number} {person.firstName} {person.lastName} - {person.age} years</strong>
        <div>{person.description}</div>
      </div>
      <div className="person__btns">
        <MyButton onClick={() => onRemove(person.id)}>Delete</MyButton>
        <MyButton onClick={onEdit}>Edit</MyButton>
      </div>
    </div>
  );
};

export default NotEditingPersonItem;