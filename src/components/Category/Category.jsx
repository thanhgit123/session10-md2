import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Category() {
    const [category,setCategory]=useState([
        {
            id:11,
            category:"thao nỉ ma",
            product:[
                {
                    id:Math.floor(Math.random()*999932492394328),
                    name:"Pi chuẩy",
                    price: 20000,
                },
                {
                    id:Math.floor(Math.random()*999932492394328),
                    name:"Sả bi",
                    price: 30000,
                },
                
            ]
        },
        {
            id:22,
            category:"Lải la",
            product:[
                {
                    id:Math.floor(Math.random()*999932492394328),
                    name:"Sẩm mơ",
                    price: 50000,
                },
                {
                    id:Math.floor(Math.random()*999932492394328),
                    name:"woa thao",
                    price: 10000,
                },
                
            ]
        },
        {
            id:33,
            category:"Cao nỉ ma",
            product:[
                {
                    id:Math.floor(Math.random()*999932492394328),
                    name:"Stfu",
                    price: 120000,
                },
                {
                    id:Math.floor(Math.random()*999932492394328),
                    name:"Who's your daddy",
                    price: 450000,
                },
                
            ]
        },
        
    ])
  return (
    <div>
        Category
        {category.map((item)=>{
           return  <li key={item.id}>
           <Link to={`/category/${item.id}`}>{item.category}</Link>
       </li>    
        })}

        <Outlet></Outlet>
    </div>
  )
}
