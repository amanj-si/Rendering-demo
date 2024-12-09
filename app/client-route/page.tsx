
"use client";

import Carousel from 'react-bootstrap/Carousel';
import MainAfter from '../../public/images/MainAfter.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from '@/components/ImageSlider';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';
// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoute() {
    // console.log("clientSideFunction render");
    // const result = serverSideFunction();
    // return (
    //     <div>
    //         <h1>Client Route</h1>
    //         <p>{result}</p>
    //     </div>
    // );
    const theme = useTheme();
    const result  = clientSideFunction();
    
    return (
    //   <ImageSlider />
      <h1 style={{
        color: theme.colors.secondary,
      }}> Heyyy {result} </h1>
    );
}


