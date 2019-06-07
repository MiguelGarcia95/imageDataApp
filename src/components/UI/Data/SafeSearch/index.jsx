// Unknown, Very Unlikely, Unlikely, Possible, Likely, and Very Likely
 
import React from 'react';

const displayData = results => {
  if (!results) return;
  return (
    <React.Fragment>
      <section className="safe_search">
        <p>Adult: {results.adult}</p>
      </section>
      <section className="safe_search">
        <p>Spoof: {results.spoof}</p>
      </section>
      <section className="safe_search">
        <p>Medical: {results.medical}</p>
      </section>
      <section className="safe_search">
        <p>Violence: {results.violence}</p>
      </section>
      <section className="safe_search">
        <p>Racy: {results.racy}</p>
      </section>
    </React.Fragment>
  )
}

function SafeSearch({safeSearch}) {
  return (
    <section>
      {displayData(safeSearch)}
    </section>
  )
}

export default SafeSearch