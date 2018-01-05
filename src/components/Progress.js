import React from 'react';

const Progress = () => {
    return (
        <div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: 500}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="row">
                <div className="col-sm">
                    Orders
                </div>
                <div className="col-sm">
                </div>
                <div className="col-sm">
                    Completed Orders
                </div>
            </div>
        </div>
    );
}

export default Progress;