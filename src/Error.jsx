import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error-page">
      <p>Unf, unfound page</p>
      <Link to="/" className="gb">
        Please go to back . . .
      </Link>
    </div>
  );
}

export default Error;
