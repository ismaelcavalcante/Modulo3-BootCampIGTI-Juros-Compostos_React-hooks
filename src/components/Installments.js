import React from 'react';
import Installment from './Installment';

export default function Installments({ installments }) {
  return (
    <div>
      <Installment installments={installments} />
    </div>
  );
}
