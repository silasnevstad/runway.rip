import React from 'react';

const Loader = ({ type = 'spinner', className = '' }) => {
    if (type === 'spinner') {
        return (
            <svg className={`animate-spin h-5 w-5 text-primary-500 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.313 1.353 6.315 3.514 8.485l2.486-2.194z"></path>
            </svg>
        );
    } else if (type === 'dots') {
        return (
            <div className={`flex space-x-1 text-primary-500 ${className}`}>
                <div className="bg-current rounded-full w-2 h-2 animate-bounce1"></div>
                <div className="bg-current rounded-full w-2 h-2 animate-bounce2"></div>
                <div className="bg-current rounded-full w-2 h-2 animate-bounce3"></div>
            </div>
        );
    }

    return null;
};

export default Loader;
