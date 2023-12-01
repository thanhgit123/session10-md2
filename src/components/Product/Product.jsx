import React from 'react'
import { useParams } from 'react-router-dom'
export default function Product() {
    const {idProduct} = useParams();
  return (
    <div>Product</div>
  )
}
