import React from 'react'
import Button from './Button'

function Modal({onclose,bookings}) {
  console.log(bookings)
  return (
    <div>
        <div className="fixed bg-white inset-0 opacity-60" ></div>
            <div className="fixed inset-0 flex items-center justify-center" >
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg border-2 p-10 " >        
                    <div className=" text-4xl text-center">Booking Details</div>
                    <div className="p-8 flex flex-col gap-3">
                      {bookings.length !==0
                      ?
                      bookings.map((el,i)=>{
                        return (
                        <div key={el.id}>
                          {i+1} : {el.numberOfPeople} peoples  
                          Created at : {el.createdAt.slice(0,10)} Updated at: {el.updatedAt?.slice(0,10)}
                        </div>)
                      })
                      :<p>No booking yet</p>
                      }
                        
                    </div>
                    <Button onclick={onclose}>Close</Button>
                </div>
                  
            </div>
    </div>
  )
}

export default Modal