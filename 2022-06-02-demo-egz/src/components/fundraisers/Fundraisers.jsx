import React from 'react';
import Fundraiser from '../fundraiser/Fundraiser';

const Fundraisers = () => {
    return (
        <div className='fundraiser'>
            <h1>All fundraising projects</h1>
            <Fundraiser />
            <br />
            <Fundraiser />
            <br />
            <Fundraiser />
        </div>
    );
}

export default Fundraisers;
