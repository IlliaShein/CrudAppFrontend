import React from "react";
import PersonItem from "./PersonItem/PersonItem";

const PersonsList = function ({ persons, title, remove, edit }) {

    return (
        <div>

            <h1 style={{ textAlign: "center" }}>
                {title}
            </h1>

            <div className="App">
                {persons.map((person, index) => (
                    <PersonItem remove={remove} edit={edit} number={index + 1} person={person} key={person.id} />
                ))}
            </div>

        </div>
    )
}

export default PersonsList;