
import { serverSideFunction } from "@/utils/server-utils";
// import { clientSideFunction } from "@/utils/client-utils";
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoute() {
    console.log("serverSideFunction render");
    const result = serverSideFunction();
    // const res2 = clientSideFunction();

    return (
        <div>
            <h1>Server Route</h1>
            <p>{result}</p>
            {/* <p>{res2}</p> */}
            <ImageSlider />
        </div>
    );
}