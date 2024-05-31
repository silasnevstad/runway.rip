'use client'

import React, { useState } from 'react';
import { Button } from "@/components/atoms/Buttons";
import { PencilIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import Input from "@/components/atoms/Input";

const EditableField = ({ label, value, onChange, isEditing, toggleEdit }) => (
    <div className="flex justify-between items-center w-full">
        {isEditing ? (
            <Input label={label} value={value} onChange={onChange} />
        ) : (
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col text-left gap-1">
                    <p className="text-lg font-semibold text-gray-800 opacity-60 pl-1">{label}</p>
                    <p className="text-xl">{value}</p>
                </div>
                <Button icon={PencilIcon} onClick={toggleEdit} variant="transparent" />
            </div>
        )}
    </div>
);

const UserForm = () => {
    const [editStates, setEditStates] = useState({ name: false, email: false });
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        email: "john@doe.com"
    });
    const [tempUserInfo, setTempUserInfo] = useState({ ...userInfo });

    const toggleEdit = (field) => {
        setEditStates({ ...editStates, [field]: !editStates[field] });
    };

    const handleChange = (field) => (event) => {
        setTempUserInfo({...tempUserInfo, [field]: event.target.value});
    };

    const handleCancel = () => {
        setTempUserInfo({ ...userInfo });
        setEditStates({ name: false, email: false });
    };

    const handleConfirm = () => {
        setUserInfo({ ...tempUserInfo });
        setEditStates({ name: false, email: false });
    };

    const isAnyFieldEditing = Object.values(editStates).some(state => state);

    return (
        <div className="flex flex-row gap-10 justify-between w-3/5 mt-10">
            <div className="flex flex-col text-left gap-6 w-1/2">
                <EditableField
                    label="Name"
                    value={tempUserInfo.name}
                    onChange={handleChange('name')}
                    isEditing={editStates.name}
                    toggleEdit={() => toggleEdit('name')}
                />
                <EditableField
                    label="Email"
                    value={tempUserInfo.email}
                    onChange={handleChange('email')}
                    isEditing={editStates.email}
                    toggleEdit={() => toggleEdit('email')}
                />
                {isAnyFieldEditing && (
                    <div className="flex justify-end mt-4">
                        <Button
                            icon={XMarkIcon}
                            onClick={handleCancel}
                            variant="transparent"
                        />
                        <Button
                            icon={CheckIcon}
                            onClick={handleConfirm}
                            variant="success"
                            className="ml-2"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserForm;
