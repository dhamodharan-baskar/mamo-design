import React from 'react';

const InvoiceForm = (props) => {
  const {
    navigate
  } = props
  return (
    <div>
      InvoiceForm
      <button onClick={() => navigate('/')}>onclick</button>
    </div>
  );
};

export default InvoiceForm