import { createContext, useState } from "react";
import React from 'react';
export const TestContext = createContext();

export const TestProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [permission, setPermission] = useState(false)

    // All Global Data
    const data = {
        loggedIn,
        setLoggedIn,
        setPermission,
        permission

    };
    return (
        <TestContext.Provider value={data}>{children}</TestContext.Provider>
    );
};