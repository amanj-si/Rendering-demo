
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
    console.log("serverSideFunction render");
    const result = serverSideFunction();
    return (
        <div>
            <h1>Server Route</h1>
            <p>{result}</p>
        </div>
    );
}