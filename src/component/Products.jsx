import React from 'react'

function Products({Products,setCart}) {
   

   

    function addToCart (index){
        const temp=[...Products]
       temp.filter((item)=>{
            if(item.id === index){
                item.visible = false;
            }
            return item;
        })
        setCart(temp)

    }
   
    
  console.log(Products);


  return (
    <>
        <div className='w-[500px] h-[400px] border-[5px] border-gray-500  mt-20 px-5 py-4'>
             <h1 className='text-2xl font-semibold text-center'>Employments</h1>  
            {
             Products.map((item,index)=>{
                return <>
                    <div style={!item.visible?{opacity:0.5}:{opacity:1}} key={index} className='w-full h-10 bg-gray-600 mt-4 px-2 flex justify-between items-center'>
                    <p className='text-white font-semibold'>{item.name}</p>
                    <p className='text-white font-semibold'>{item.Age}</p>
                    <div style={!item.visible?{opacity:0}:{opacity:1}} className='w-auto h-auto px-2 rounded-full bg-green-500 flex gap-3'>
                        <button className='text-white text-2xl font-semibold'
                        onClick={()=>addToCart(item.id)}>Add</button>
                        
                    </div>

                    </div>
                </>
             })
            }
        </div>
    </>
  )
}

export default Products