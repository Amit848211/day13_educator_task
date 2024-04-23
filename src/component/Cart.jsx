import React, { useEffect, useState } from "react";

function Cart({ cart, setCart }) {
  const [average, setAverage] = useState(0);
  const[cart1,setCart1]=useState(cart)

  function averageCalculate() {
    let temp = 0;
    cart.map((item) => {
      if (item.visible === false) {
        temp += item.Age;
      }
      return item;
    });
    setAverage(temp);
  }
  useEffect(() => {
    averageCalculate();
  }, [cart]);

  console.log(average);

  function removeToCart(index) {
    const temp = [...cart];
    temp.filter((item) => {
      if (item.id === index) {
        item.visible = true;
      }
      return item;
    });
    setCart(temp);
  }


  const sortByAge = () => {
    
    const sortedPeople = [...cart1].sort((a, b) => a.Age - b.Age);
    setCart1(sortedPeople);
    console.log("cart1",cart1);
  };
  







  return (
    <>
      <div className="w-[500px] h-auto border-[5px] flex flex-col justify-between border-gray-500  mt-20 px-5 py-4">
        <h1 className="text-2xl font-semibold text-center">Team</h1>{" "}
        <div>
          {average ? (
            <button onClick={sortByAge} className="text-white flex ml-[300px] text-[12px] font-semibold px-2 rounded-full bg-pink-500">
              SORT BY AGE
            </button>
          ) : (
            <></>
          )}
          {average === 0 ? (
            <>
              <h1 className="text-2xl text-center"> empty</h1>
            </>
          ) : (
            cart1.map((item, index) => {
              if (item.visible === false) {
                return (
                  <>
                    <div
                      key={index}
                      className="w-full h-10 bg-gray-600 mt-4 px-2 flex justify-between items-center"
                    >
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-white font-semibold">{item.Age}</p>
                      <button
                        className="text-white text-[14px] font-semibold px-2 rounded-full bg-green-500"
                        onClick={() => removeToCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                );
              }
            })
          )}
        </div>
        <hr className="h-[5px] bg-gray-600 mt-10"></hr>
        <div className="mt-5 w-full h-14 px-2 bg-gray-600 flex justify-between items-center">
          <h1 className="text-2xl text-white font-semibold">Average Age</h1>
          <p className="text-2xl text-white font-semibold">{average / 2}</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
