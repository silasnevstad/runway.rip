'use client';

import { useState } from 'react';
import SearchBar from '@/components/molecules/SearchBar';

const ClientSideSearchBar = ({
    items,
    placeholder = 'Search...',
    containerClassName = '',
    inputClassName = '',
    onSelect = () => {}
}) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        // Do something with the selected item or pass it to an external handler.
        onSelect(item);
    };

    return (
        <SearchBar
            items={items}
            placeholder={placeholder}
            containerClassName={containerClassName}
            inputClassName={inputClassName}
            onItemSelect={handleItemSelect}
            // Here we define a default renderItem function.
            renderItem={(item) => <div>{item.title}</div>}
        />
    );
};

export default ClientSideSearchBar;
