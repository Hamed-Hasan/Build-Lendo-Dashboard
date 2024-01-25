import React from 'react';
import './riskScoreDistribution.scss'
import Help from '../../assets/images/help.png'
import Left from '../../assets/images/left.png'
import Right from '../../assets/images/right.png'
const RiskScoreDistribution = () => {
    return (
        <div >
            <p className='risk'>
                Please note this is a high-level overview. Each component would need to be fleshed out with the proper HTML structure and SCSS to match the design precisely. The actual implementation would be more complex and would need to handle user interactions, state management, and possibly data fetching if the data is dynamic.
            </p>



            <div className="section-grid">
                <div className="column">
                    <div className='mFlex'>
                        <h3>Invested</h3>

                        <div>
                            <img className='icon' src={Help} />
                        </div>
                    </div>
                    <img src={Left} />
                </div>
                <div className="column">
                    <h3>Excepted Risk Score <br /> Distribution</h3>

                    <img src={Right} />
                </div>
            </div>



            <>
                Please note this is a high-level overview. Each component would need to be fleshed out with the proper HTML structure and SCSS to match the design precisely. The actual implementation would be more complex and would need to handle user interactions, state management, and possibly data fetching if the data is dynamic.
            </>
        </div>
    );
};

export default RiskScoreDistribution;