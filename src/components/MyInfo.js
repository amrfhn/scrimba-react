import React from 'react'

var MyInfo = () => {
    const firstName = 'Amir';
    const lastName = 'Fitreen';

    const date = new Date();
    const hours =  date.getHours();
    var timeOfDay;

    const styles = {backgroundColor: '#fdee00', fontSize:'22px'}

    if (hours < 12) {
        timeOfDay = 'Morning';
    } else if (hours >= 12 && hours < 19) {
        timeOfDay = 'Evening';
        styles.backgroundColor = 'red';
    } else {
        timeOfDay = 'Night';
    }


    return (
        <div>
            <h1 className="h1" style={styles}>Good {`${timeOfDay}`}, {`${firstName} ${lastName}`}!</h1>
            <p>I am 26 years old.</p>
            <ol>
                <li>Penang</li>
                <li>Manchester</li>
                <li>Berlin</li>
            </ol>
        </div>
    )
}

export default MyInfo;