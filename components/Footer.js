import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            setTime(DateTime.now().setZone('America/New_York').toLocaleString({
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            }));
        };

        // Update time initially
        updateTime();

        // Update time every second
        const intervalId = setInterval(updateTime, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="hidden md:flex justify-between pb-8 px-8 text-[var(--text-secondary)] text-sm">
            <p className='flex flex-row'>{time && <p> {time} </p>} &nbsp;<span className="text-xs"> • </span>&nbsp;New York</p>
            <p>Adam Kuzma <span className="text-xs"> • </span> 2024</p>
        </footer>
    );
}

export default Footer;