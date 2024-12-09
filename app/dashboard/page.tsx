
"use client";

import React, { useState } from 'react';
export default function DashboardPage() {
    console.log("Dashboard Page");
    const [name , setName] = useState("");
    return (
        <>
        <p>This is the Dashboard page.</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>{name}</p>
        </>
    );
}