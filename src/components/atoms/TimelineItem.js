import React from 'react';
import { formatDateAndRelativeTime } from "@/utils/date";

const TimelinePoint = ({ imageSrc, imageAlt, icon: IconComponent }) => {
    if (imageSrc && IconComponent) {
        console.warn('You can only use one of imageSrc or icon prop in TimelineItem');
    }
    if (imageSrc) {
        return <img src={imageSrc} alt={imageAlt} className="h-8 w-8 rounded-full -ml-3" />;
    }
    if (IconComponent) {
        return (
            <div className="h-8 w-8 rounded-full flex items-center justify-center -ml-3">
                <IconComponent className="w-6 h-6 text-gray-800" />
            </div>
        );
    }
    return <span className="h-2 w-2 ring-1 ring-gray-600 rounded-full bg-gray-300 flex items-center justify-center"></span>;
};

const TimelineItem = ({
    imageSrc,
    imageAlt,
    icon: IconComponent,
    date,
    children,
    isLast = false,
    showRelativeTime = true,
    horizontal = true,
}) => {
    return (
        <div className={`relative ${horizontal ? "mr-30" : "mb-12"} pb-4`}>
            {!isLast && (
                <span className={
                    horizontal
                        ? `absolute left-15 top-5 -mt-px w-full h-0.5 bg-gray-200 dark:bg-gray-700`
                        : `absolute left-1 top-10 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700`
                } aria-hidden="true"></span>
            )}
            <div className={`relative flex items-center space-x-3 ${horizontal ? 'flex-col' : 'flex-row'}`}>
                <TimelinePoint imageSrc={imageSrc} imageAlt={imageAlt} icon={IconComponent} />
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
    );
};

export default TimelineItem;