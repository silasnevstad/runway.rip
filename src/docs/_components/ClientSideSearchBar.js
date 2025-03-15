'use client';
import SearchBar from '@/components/molecules/SearchBar';

const ClientSideSearchBar = ({
    items = [],
    onItemSelect = () => {},
    renderItem,
    size = "md",
    placeholder = "Search...",
    modalPlaceholder = "Search...",
    modalSearch = false,
    containerClassName = "",
    inputClassName = "",
    ...props
}) => {
    return (
        <SearchBar
            items={items}
            onItemSelect={onItemSelect}
            renderItem={renderItem}
            size={size}
            placeholder={placeholder}
            modalPlaceholder={modalPlaceholder}
            modalSearch={modalSearch}
            containerClassName={containerClassName}
            inputClassName={inputClassName}
            {...props}
        />
    );
};

export default ClientSideSearchBar;
