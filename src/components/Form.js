import React from 'react';

export default function Form({
  onValueStart,
  onCommpoundInterest,
  onPeriod,
  valueStart,
  compoundInterest,
  period,
}) {
  const handleValueStart = (event) => {
    const newValueStart = Number(event.target.value);

    onValueStart(newValueStart);
  };

  const handleCompoundInterest = (event) => {
    const newCompoundInterest = Number(event.target.value);

    onCommpoundInterest(newCompoundInterest);
  };

  const handlePeriod = (event) => {
    const newPeriod = Number(event.target.value);

    onPeriod(newPeriod);
  };

  return (
    <div>
      <div style={styles.flexRow}>
        <div className="input-field" style={{ width: '300px', margin: '10px' }}>
          <input
            id="valueStart"
            min="0"
            step="100"
            value={valueStart}
            type="number"
            onChange={handleValueStart}
          />
          <label className="active" htmlFor="valueStart">
            Montante inicial:
          </label>
        </div>

        <div className="input-field" style={{ width: '300px', margin: '10px' }}>
          <input
            id="compoundInterest"
            min="-12"
            max="12"
            step="0.1"
            value={compoundInterest}
            type="number"
            onChange={handleCompoundInterest}
          />
          <label className="active" htmlFor="compoundInterest">
            Taxa de juros mensal:
          </label>
        </div>

        <div className="input-field" style={{ width: '300px', margin: '10px' }}>
          <input
            id="period"
            min="1"
            step="1"
            value={period}
            type="number"
            onChange={handlePeriod}
          />
          <label className="active" htmlFor="period">
            Período (meses):
          </label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  },
};
