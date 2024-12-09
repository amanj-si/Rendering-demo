import {Product} from '@/components/product';
import {Reviews} from '@/components/reviews';
import {Suspense} from 'react';

export default function ProductDetail() {
    return (
        <div>
            <h1>Product Detail</h1>
            {/* <Suspense fallback={<div>Loading product ...</div>}>
            <Product />
            </Suspense>
            <Suspense fallback={<div>Loading review ...</div>}>
            <Reviews />
            </Suspense> */}
        </div>
    )
}