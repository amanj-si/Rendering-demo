
"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoute() {
    console.log("clientSideFunction render");
    const result = serverSideFunction();
    return (
        <div>
            <h1>Client Route</h1>
            <p>{result}</p>
        </div>
    );
}