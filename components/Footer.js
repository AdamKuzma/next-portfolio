import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Footer() {
    const [time, setTime] = useState(DateTime.now().setZone('America/New_York').toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(DateTime.now().setZone('America/New_York').toLocaleString({
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="flex justify-between pb-8 px-8 text-[var(--text-secondary)] text-sm">
            <p>New York City</p>
            <p>{time}</p>
        </footer>
    );
}

export default Footer;