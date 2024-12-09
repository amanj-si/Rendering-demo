
"use client";   

import {useState} from 'react';

export const ClientComponentTwo=() =>{
    const [name, setName] = useState("aman");
    return (
        <div>
            <h1>Client Component Two</h1>
        </div>
    )
}