'use client';

import React, { useEffect, useState } from 'react';
import { SYMPOSIUM_CONFIG } from '@/data/symposium';

export default function CountdownTimer() {
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
    <div className="deck-countdown-wrapper">
      <div className="deck-countdown-grid" role="timer" aria-live="polite">
        <div className="countdown-digit-cell">
          <div className="cd-val" id="cd-days">{timeLeft.days}</div>
          <div className="cd-lbl">DAYS</div>
        </div>
        <div className="countdown-digit-cell">
          <div className="cd-val" id="cd-hours">{timeLeft.hours}</div>
          <div className="cd-lbl">HOURS</div>
        </div>
        <div className="countdown-digit-cell">
          <div className="cd-val" id="cd-mins">{timeLeft.mins}</div>
          <div className="cd-lbl">MINS</div>
        </div>
        <div className="countdown-digit-cell">
          <div className="cd-val" id="cd-secs">{timeLeft.secs}</div>
          <div className="cd-lbl">SECS</div>
        </div>
      </div>
    </div>
  );
}
