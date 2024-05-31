import React from 'react';
import { formatDateAndRelativeTime } from "@/utils/date";

const TimelinePoint = ({ type, content }) => {
    switch (type) {
        case 'dot':
            return <span className="h-2 w-2 ring-1 ring-gray-600 rounded-full bg-gray-300 flex items-center justify-center"></span>;
        case 'icon':
            return <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center -ml-3">{content}</div>;
        case 'image':
            return <img src={content.src} alt={content.alt} className="h-8 w-8 rounded-full -ml-3" />;
        default:
            return null;
    }
};

const TimelineItem = ({
    type = 'dot', // 'dot', 'icon', or 'image'
    content, // content based on type: icon or src
    date,
    children,
    isLast = false,
    showRelativeTime = true
}) => {
    return (
        <li>
            <div className="relative pb-8 whitespace-nowrap">
                {!isLast && (
                    <span className="absolute left-1 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                )}
                <div className="relative flex items-center space-x-3">
                    <TimelinePoint type={type} content={content} />
                    <div className="min-w-0 flex-1 flex justify-between space-x-4">
                        <div className="flex items-center gap-2">
                            {children}
                        </div>
                        {date && (
                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                <time dateTime={date.format('YYYY-MM-DD')}>{formatDateAndRelativeTime(date, showRelativeTime)}</time>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TimelineItem;