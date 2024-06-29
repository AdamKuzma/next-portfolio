import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            setTime(DateTime.now().setZone('America/New_York').toLocaleString({
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }));
        };

        // Update time initially
        updateTime();

        // Update time every second
        const intervalId = setInterval(updateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="hidden md:flex justify-between pb-8 px-8 text-[var(--text-secondary)] text-sm">
            <p>New York City</p>
            {time && <p>{time}</p>}
        </footer>
    );
}

export default Footer;