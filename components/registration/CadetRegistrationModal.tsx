'use client';

import React, { useState, useEffect } from 'react';
import { EVENTS_DATA } from '@/data/events';

interface CadetRegistrationModalProps {
  isOpen: boolean;
  initialEventId?: string;
  onClose: () => void;
}

interface CadetMember {
  name: string;
  email: string;
  phone: string;
  collegeId: string;
}

export default function CadetRegistrationModal({
  isOpen,
  initialEventId,
  onClose
}: CadetRegistrationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [eventId, setEventId] = useState(initialEventId || '');
  const [teamName, setTeamName] = useState('');
  const [institution, setInstitution] = useState('');
  const [city, setCity] = useState('');
  const [teamSize, setTeamSize] = useState(2);
  const [leader, setLeader] = useState<CadetMember>({
    name: '',
    email: '',
    phone: '',
    collegeId: ''
  });
  const [members, setMembers] = useState<CadetMember[]>([]);
  const [passCipher, setPassCipher] = useState('');

  useEffect(() => {
    if (initialEventId) {
      setEventId(initialEventId);
    }
  }, [initialEventId]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
    }
  }, [isOpen]);

  const selectedEvent = EVENTS_DATA.find((e) => e.id === eventId);

  const [errorMsg, setErrorMsg] = useState('');

  const handleNextStep = () => {
    setErrorMsg('');
    if (currentStep === 1) {
      if (!eventId) {
        setErrorMsg('Please select an arena to continue.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!teamName.trim() || !institution.trim() || !city.trim()) {
        setErrorMsg('Please complete Squad Codename, Institution, and City.');
        return;
      }
      // Initialize dynamic members array if size > 1
      const initialMembers: CadetMember[] = [];
      for (let i = 2; i <= teamSize; i++) {
        initialMembers.push(members[i - 2] || { name: '', email: '', phone: '', collegeId: '' });
      }
      setMembers(initialMembers);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!leader.name.trim() || !leader.email.trim() || !leader.phone.trim() || !leader.collegeId.trim()) {
        setErrorMsg('Please fill in all primary squad lead details.');
        return;
      }
      for (let i = 0; i < members.length; i++) {
        const m = members[i];
        if (!m.name.trim() || !m.email.trim() || !m.phone.trim()) {
          setErrorMsg(`Please fill in all required fields for Cadet ${i + 2}.`);
          return;
        }
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      // Generate Holo-Pass
      const code = selectedEvent ? (selectedEvent.shortName || selectedEvent.id) : 'VIG';
      const randHash = Math.random().toString(36).substring(2, 7).toUpperCase();
      const generatedPass = `VIG26-${code}-${randHash}`;
      setPassCipher(generatedPass);
      setCurrentStep(5);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleMemberChange = (index: number, field: keyof CadetMember, val: string) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: val };
    setMembers(updated);
  };

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'active' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container reg-terminal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close registration modal">
          ✕
        </button>

        <div className="reg-modal-content">
          <div className="reg-terminal-header">
            <span className="reg-terminal-tag">CADET ONBOARDING TERMINAL // VIGYANTRA 2026</span>
            <h2 className="reg-terminal-title">SYMPOSIUM ENTRY REGISTRATION</h2>
            <p className="reg-terminal-subtitle">
              SJB Institute of Technology • Silver Jubilee Technical Symposium
            </p>
          </div>

          {errorMsg && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #ef4444',
                color: '#fca5a5',
                padding: '10px 14px',
                borderRadius: '6px',
                marginBottom: '14px',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Steps Indicator */}
          <div className="reg-steps-indicator">
            <div id="reg-node-1" className={`reg-step-node ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <div className="reg-step-circle">1</div>
              <div className="reg-step-label">01. ARENA</div>
            </div>
            <div className="reg-step-line" />
            <div id="reg-node-2" className={`reg-step-node ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <div className="reg-step-circle">2</div>
              <div className="reg-step-label">02. SQUAD</div>
            </div>
            <div className="reg-step-line" />
            <div id="reg-node-3" className={`reg-step-node ${currentStep === 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
              <div className="reg-step-circle">3</div>
              <div className="reg-step-label">03. CADETS</div>
            </div>
            <div className="reg-step-line" />
            <div id="reg-node-4" className={`reg-step-node ${currentStep === 4 ? 'active' : ''} ${currentStep > 4 ? 'completed' : ''}`}>
              <div className="reg-step-circle">4</div>
              <div className="reg-step-label">04. AUDIT</div>
            </div>
            <div className="reg-step-line" />
            <div id="reg-node-5" className={`reg-step-node ${currentStep === 5 ? 'active' : ''}`}>
              <div className="reg-step-circle">5</div>
              <div className="reg-step-label">05. PASS</div>
            </div>
          </div>

          {/* STEP 1: ARENA SELECTION */}
          {currentStep === 1 && (
            <div className="reg-step-pane">
              <div className="form-group">
                <label className="form-label">Select Flagship Arena *</label>
                <select
                  className="form-select"
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                >
                  <option value="">-- Select One of 8 Arenas --</option>
                  {EVENTS_DATA.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.number} — {e.name} ({e.subName}) | Team: {e.teamSize || `${e.minTeam} - ${e.maxTeam} Members`}
                    </option>
                  ))}
                </select>
              </div>

              {selectedEvent && (
                <div
                  style={{
                    background: 'rgba(0,240,255,0.06)',
                    border: '1px solid var(--cyan)',
                    borderRadius: '8px',
                    padding: '16px',
                    marginTop: '14px',
                    boxShadow: '0 0 20px rgba(0,240,255,0.15)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#ffffff' }}>
                      {selectedEvent.name}
                    </h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 800 }}>
                      {selectedEvent.prizePool || '₹50,000'} PRIZE
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--silver-300)', margin: '6px 0' }}>
                    {selectedEvent.shortDescription}
                  </p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)', marginTop: '6px' }}>
                    Squad Size: <strong>{selectedEvent.teamSize || `${selectedEvent.minTeam} - ${selectedEvent.maxTeam} Members`}</strong> &nbsp;|&nbsp; Fee: <strong>{selectedEvent.registrationFee || `₹${selectedEvent.fee} / Team`}</strong> &nbsp;|&nbsp; Venue: <strong>{selectedEvent.venue}</strong>
                  </div>
                </div>
              )}

              <div className="reg-pane-nav right">
                <button className="btn btn-primary" onClick={handleNextStep}>
                  <span>PROCEED TO SQUAD INTEL →</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SQUAD DETAILS */}
          {currentStep === 2 && (
            <div className="reg-step-pane">
              <div className="form-group">
                <label className="form-label">Squad / Team Codename *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. CyberVanguard, NeuralRelay..."
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">College / University Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. SJB Institute of Technology / [College Name]"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">City & State *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Bengaluru, Karnataka"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Delegation Size *</label>
                <select
                  className="form-select"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                >
                  {selectedEvent ? (
                    Array.from(
                      { length: selectedEvent.maxTeam - selectedEvent.minTeam + 1 },
                      (_, idx) => selectedEvent.minTeam + idx
                    ).map((size) => (
                      <option key={size} value={size}>
                        {size} Cadets
                      </option>
                    ))
                  ) : (
                    <>
                      <option value="2">2 Cadets</option>
                      <option value="3">3 Cadets</option>
                      <option value="4">4 Cadets</option>
                    </>
                  )}
                </select>
              </div>

              <div className="reg-pane-nav between">
                <button className="btn btn-secondary" onClick={handlePrevStep}>
                  ← BACK
                </button>
                <button className="btn btn-primary" onClick={handleNextStep}>
                  ENTER CADET ROSTER →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CADET ROSTER */}
          {currentStep === 3 && (
            <div className="reg-step-pane">
              <div className="cadet-section-header">
                <span>⚡ PRIMARY SQUAD LEAD (CADET 1)</span>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Leader Name"
                    value={leader.name}
                    onChange={(e) => setLeader({ ...leader, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="e.g. example@gmail.com"
                    value={leader.email}
                    onChange={(e) => setLeader({ ...leader, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Contact Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="e.g. +91 98765 43210"
                    value={leader.phone}
                    onChange={(e) => setLeader({ ...leader, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Institutional Roll No. / USN *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 1JB24CS001"
                    value={leader.collegeId}
                    onChange={(e) => setLeader({ ...leader, collegeId: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Dynamic Additional Members */}
              {members.map((m, index) => (
                <div
                  key={index}
                  style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginTop: '16px' }}
                >
                  <div className="cadet-section-header">
                    <span>⚡ CADET {index + 2} (SQUAD MEMBER)</span>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder={`e.g. Cadet ${index + 2} Name`}
                        value={m.name}
                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder={`e.g. cadet${index + 2}@example.com`}
                        value={m.email}
                        onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Contact Phone *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="e.g. +91 XXXXX XXXXX"
                        value={m.phone}
                        onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">College Roll No. / USN *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder={`e.g. 1JB24XX00${index + 2}`}
                        value={m.collegeId}
                        onChange={(e) => handleMemberChange(index, 'collegeId', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="reg-pane-nav between">
                <button className="btn btn-secondary" onClick={handlePrevStep}>
                  ← BACK
                </button>
                <button className="btn btn-primary" onClick={handleNextStep}>
                  AUDIT ENTRY DATA →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: AUDIT */}
          {currentStep === 4 && (
            <div className="reg-step-pane">
              <div
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid var(--cyan-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 0 25px rgba(0,240,255,0.1)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '8px',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--cyan)' }}>
                    SQUAD ENROLLMENT MANIFEST
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 800 }}>
                    STATUS: READY FOR CIPHER
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    fontSize: '0.86rem',
                    color: 'var(--silver-200)',
                    marginBottom: '16px',
                  }}
                >
                  <div><strong>Selected Arena:</strong> {selectedEvent ? selectedEvent.name : eventId}</div>
                  <div><strong>Squad Codename:</strong> {teamName}</div>
                  <div><strong>Institution:</strong> {institution}</div>
                  <div><strong>Location:</strong> {city}</div>
                  <div><strong>Squad Capacity:</strong> {teamSize} Cadets</div>
                  <div><strong>Registration Desk:</strong> {selectedEvent ? selectedEvent.registrationFee : 'Free'}</div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.84rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--gold)', marginBottom: '4px' }}>Squad Lead:</div>
                  <div style={{ color: 'var(--silver-300)' }}>
                    {leader.name} [USN: {leader.collegeId}] &nbsp;|&nbsp; 📞 {leader.phone} &nbsp;|&nbsp; ✉️ {leader.email}
                  </div>
                </div>

                {members.length > 0 && (
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: '12px', fontSize: '0.84rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--gold)', marginBottom: '4px' }}>Additional Cadets:</div>
                    {members.map((m, idx) => (
                      <div key={idx} style={{ color: 'var(--silver-300)', marginBottom: '4px' }}>
                        Cadet {idx + 2}: {m.name} [USN: {m.collegeId}] &nbsp;|&nbsp; 📞 {m.phone}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="audit-note-box" style={{ marginTop: '16px' }}>
                <span>⚠️ PROTOCOL NOTE:</span> Review the submitted squad manifest. On verification, your encrypted Silver Jubilee Entry Pass will be generated.
              </div>

              <div className="reg-pane-nav between">
                <button className="btn btn-secondary" onClick={handlePrevStep}>
                  ← MODIFY ROSTER
                </button>
                <button className="btn btn-gold" onClick={handleNextStep}>
                  CONFIRM &amp; GENERATE HOLO-PASS ★
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: COMMEMORATIVE HOLO-PASS */}
          {currentStep === 5 && (
            <div className="reg-step-pane">
              <div className="holo-pass-deck">
                <span className="hud-dialog-tag gold" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                  ★ DELEGATE ENTRY AUTHORIZED ★
                </span>

                <div className="holo-pass-card">
                  <div className="holo-pass-top">
                    <div>
                      <div className="holo-pass-college-badge">SJB INSTITUTE OF TECHNOLOGY</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--silver-400)' }}>
                        25th Silver Jubilee Celebrations • Bengaluru
                      </div>
                    </div>
                    <div className="holo-pass-silver-seal">25 YRS JUBILEE</div>
                  </div>

                  <div className="holo-pass-code-banner">
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '0.12em' }}>
                      COMMEMORATIVE PASS CIPHER
                    </div>
                    <div className="holo-pass-id">{passCipher}</div>
                  </div>

                  <div className="holo-pass-grid">
                    <div><strong>Arena:</strong> {selectedEvent ? selectedEvent.name : 'Flagship Track'}</div>
                    <div><strong>Squad:</strong> {teamName} ({teamSize} Cadets)</div>
                    <div><strong>Lead Cadet:</strong> {leader.name}</div>
                    <div><strong>Roll / USN:</strong> {leader.collegeId}</div>
                    <div><strong>Institution:</strong> {institution}</div>
                    <div><strong>Date:</strong> 30 October 2026</div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <strong>Campus Lab:</strong> {selectedEvent ? selectedEvent.venue : 'SJB Main Arena'}
                    </div>
                  </div>

                  <div className="holo-pass-barcode-wrap">
                    <div className="barcode-lines">||| | | |||| | |||||| | ||| | ||</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', fontWeight: 700 }}>
                      IEEE-CS VERIFIED
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--gold)', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px auto' }}>
                  ⚡ Please carry this Pass Token alongside your physical College ID card to the campus registration desks on Friday, 30 October 2026.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <button className="btn btn-secondary" onClick={() => window.print()}>
                    <span>🖨️ PRINT ENTRY PASS</span>
                  </button>
                  <button className="btn btn-primary" onClick={onClose}>
                    <span>RETURN TO COMMAND DECK</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
