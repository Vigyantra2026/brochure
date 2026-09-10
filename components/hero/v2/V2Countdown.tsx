'use client';

import React, { useEffect, useState } from 'react';
import { SYMPOSIUM_CONFIG } from '@/data/symposium';

export default function V2Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00'
  });

  useEffect(() => {
    const targetDate = new Date(SYMPOSIUM_CONFIG.targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        mins: String(m).padStart(2, '0'),
        secs: String(s).padStart(2, '0')
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="v2-countdown-wrap" role="timer" aria-label="Event Countdown Timer">
      <div className="v2-countdown-grid">
        <div className="v2-countdown-cell">
          <span className="v2-cd-num">{timeLeft.days}</span>
          <span className="v2-cd-lbl">DAYS</span>
        </div>

        <span className="v2-cd-colon" aria-hidden="true">:</span>

        <div className="v2-countdown-cell">
          <span className="v2-cd-num">{timeLeft.hours}</span>
          <span className="v2-cd-lbl">HOURS</span>
        </div>

        <span className="v2-cd-colon" aria-hidden="true">:</span>

        <div className="v2-countdown-cell">
          <span className="v2-cd-num">{timeLeft.mins}</span>
          <span className="v2-cd-lbl">MINS</span>
        </div>

        <span className="v2-cd-colon" aria-hidden="true">:</span>

        <div className="v2-countdown-cell">
          <span className="v2-cd-num">{timeLeft.secs}</span>
          <span className="v2-cd-lbl">SECS</span>
        </div>
      </div>
    </div>
  );
}
