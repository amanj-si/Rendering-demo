
import { cookies } from "next/headers";

export default async function AboutPage() {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    console.log("Theme: ", theme);

    console.log("About Page") 
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page {new Date().toLocaleTimeString()}</p>
        </div>
    );
}