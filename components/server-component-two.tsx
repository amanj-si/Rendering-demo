import fs from "fs";

export const ServerComponentTwo=() =>{
    fs.readFileSync("src/components/server-component-two.tsx","utf-8");
    return (
        <div>
            <h1>Server Component Two</h1>
          
        </div>
    )
}