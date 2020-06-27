import React from 'react';
import { formatCoin, formatPercent } from '../helpers/formatHelpers';

export default function Installment({ installments }) {
  const {
    flexColumn,
    flexRow,
    flexRowAll,
    positiveValue,
    negativeValue,
    positivePercent,
    negativePercent,
  } = styles;

  return (
    <div style={flexRowAll}>
      {installments.map(({ id, value, valueCompound, percentCompound }) => {
        return (
          <div key={id} style={flexRow}>
            <div style={{ fontWeight: 'bold' }}>{id}</div>
            <div style={flexColumn}>
              <div style={percentCompound >= 0 ? positiveValue : negativeValue}>
                {formatCoin(value)}
              </div>
              <div style={percentCompound >= 0 ? positiveValue : negativeValue}>
                {formatCoin(valueCompound)}
              </div>
              <div
                style={percentCompound >= 0 ? positivePercent : negativePercent}
              >
                {formatPercent(percentCompound)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    border: '1px solid gray',
    borderRadius: '5px',
    width: '139px',
    heigth: '150px',
    margin: '10px',
    padding: '10px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
    alignItems: 'flexStart',
    marginLeft: '10px',
    padding: '10px',
  },

  flexRowAll: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  },

  positiveValue: {
    color: '#81c784',
    fontWeight: 'bold',
  },

  negativeValue: {
    color: '#dd2c00',
    fontWeight: 'bold',
  },

  positivePercent: {
    color: '#607d8b',
  },

  negativePercent: {
    color: '#ffab40',
  },
};
