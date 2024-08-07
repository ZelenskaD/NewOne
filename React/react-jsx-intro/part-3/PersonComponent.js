


const PersonComponent = (props) => {
    const displayName = name.length > 8 ? name.substring(0, 6) : name;
    return(
        <div>
            <p>
               Learn some information about this person:
            </p>
            <h3>{displayName}</h3>
            <p>Age: {props.age}</p>
            {props.age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

        </div>

    )
}

