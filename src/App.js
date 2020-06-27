import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [valueStart, setValueStart] = useState(1000);
  const [compoundInterest, setCompoundInterest] = useState(0.5);
  const [period, setPeriod] = useState(1);
  const [installment, setinstallment] = useState([]);

  useEffect(() => {
    const newInstallment = [];

    for (let index = 0; index < period; index++) {
      let parcel = index + 1;
      let amount = (
        valueStart *
        (1 + compoundInterest / 100) ** parcel
      ).toFixed(2);
      let value = amount;
      let valueCompound = (value - valueStart).toFixed(2);
      let percentCompound = 0;
      if (valueStart === 0) {
        percentCompound = 0;
      } else {
        percentCompound = ((valueCompound / valueStart) * 100).toFixed(2);
      }

      newInstallment.push({
        id: parcel,
        value,
        valueCompound,
        percentCompound,
      });
    }

    setinstallment(newInstallment);
  }, [valueStart, compoundInterest, period]);

  const newValueStart = (value) => {
    setValueStart(value);
  };

  const newCommpoundInterest = (value) => {
    setCompoundInterest(value);
  };

  const newPeriod = (value) => {
    setPeriod(value);
  };

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <Form
        onValueStart={newValueStart}
        onCommpoundInterest={newCommpoundInterest}
        onPeriod={newPeriod}
        valueStart={valueStart}
        compoundInterest={compoundInterest}
        period={period}
      />
      <Installments installments={installment} />
    </div>
  );
}
