import React from 'react';

import './Ship.scss';

const Ship = () => {
return (
    <>
    <section className="contain checkout-wrapper">
        <div className="ship-address">
            <h5>Ship to</h5>
            <form className="ship-form">
                <div className="input-group">
                    <div className="imput-label">Full Name</div>
                    <input type="text" />
                </div>
            </form>
        </div>
    </section>
    </>
  );
};

export default Ship;
