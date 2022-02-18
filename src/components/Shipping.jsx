import React, { useState } from 'react'

const Shipping = () => {
    const [count, setcount] = useState(1);
    const [address,setAddress] =  useState('Seems like you have not entered any address 😔')
    const [card,setCard] = useState('No card details')

  return (
      <>
      <h1 className='flex justify-center text-xl mt-10 font-semibold'>Please enter your delivery address</h1>
    <div className='container mx-auto flex items-center justify-center'>
        {
            count === 1 ? (
            <div className='flex items-center flex-col p-10 bg-gray-200 rounded-md w-2/5'>
            <div className='mb-4'>
                <h1 className='flex items-start'>Address</h1>
                <label for="email-address" class="sr-only">Address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="5/407 Rose Apartment"
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <h1 className='flex items-start'>Apartment</h1>
                <label for="email-address" class="sr-only">Apartment</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Goldeval lane" />
            </div>
            <div className='mb-4'>
                <h1 className='flex items-start'>City</h1>
                <label for="email-address" class="sr-only">City</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mumbai" />
            </div>
            <div className='mb-4'>
                <h1 className='flex items-start'>Pincode</h1>
                <label for="email-address" class="sr-only">Pin-Code</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="400001" />
            </div>
            <div className='flex justify-center mt-10'>
                <button
                onClick={(e) => {
                    e.preventDefault();
                    setcount(count + 1);
                  }}
                className='px-5 py-1 rounded-md bg-indigo-500 w-full text-white'>Next</button>
            </div>
        </div>
            ) : null
        }
        {
            count === 2 ? (
                <div className='flex items-center flex-col p-10 bg-gray-200 rounded-md w-2/5'>
                <div className='mb-4'>
                    <h1 className='flex items-start'>Credit card no</h1>
                    <label for="email-address" class="sr-only">Card no</label>
                    <input id="Number" name="email" type="number" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="5555555555554444"
                    onChange={(e) => setCard(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='flex items-start'>CVV</h1>
                    <label for="email-address" class="sr-only">Apartment</label>
                    <input id="email-address" name="email" type="number" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="123" />
                </div>
                <div className='mb-4'>
                    <h1 className='flex items-start'>Name on card</h1>
                    <label for="email-address" class="sr-only">City</label>
                    <input id="email-address" name="email" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="John Doe" />
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='mr-4'>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setcount(count - 1);
                        }}
                        className='px-5 py-1 rounded-md bg-indigo-500 w-full text-white'>Go back</button>
                    </div>
                    <div>
                    <button
                    onClick={(e) => {
                        e.preventDefault();
                        setcount(count + 1);
                      }}
                    className='px-5 py-1 rounded-md bg-indigo-500 w-full text-white'>Pay Now</button>
                    </div>
                </div>
            </div>
            ) : null
        }
        {
            count === 3 ? (
                <div>
                    <h1 className='text-2xl mt-10 text-red-600 font-bold'>
                        Order recieved successfully🚀🚀🚀....
                    </h1>
                    <p>Below are the order details</p>
                    <div className='flex items-center justify-center mt-4'>
                        <h1 className='font-semibold text-xl'>Address - </h1>
                        <p className='text-lg'>{address} </p>
                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        <h1 className='font-semibold text-xl'>Paid by- </h1>
                        <p className='text-lg'>Card No - XXXX-XXXX-XXXX-<span>{card.split("").slice(card.length - 5,card.length - 1)}</span> </p>
                    </div>
                    <button className='px-4 py-2 bg-indigo-500 rounded-md mt-4 text-white'
                    onClick={() => {
                        setcount(count - 1)
                    }}
                    >Go back</button>
                </div>
            ) : null
        }
    </div>
    </>
  )
}

export default Shipping