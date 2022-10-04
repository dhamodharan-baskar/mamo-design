import React from 'react';

const InvoiceForm = (props) => {
  const {
    history
  } = props
  return (
    <div>
      InvoiceForm
      <button onClick={() => history.replace('/')}>onclick</button>
    </div>
  );
};

export default InvoiceForm;