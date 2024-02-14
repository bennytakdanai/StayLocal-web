import React from 'react'
import Button from './Button'

function Modal() {
  return (
    <div>
        <div className="fixed bg-white inset-0 opacity-60" ></div>
            <div className="fixed inset-0 flex items-center justify-center" >
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg border-2 p-10 " >        
                    <div className=" text-4xl text-center">Booking Details</div>
                    <div className="p-8 flex flex-col gap-3">
                        <div>User1 : 5 peoples  Created at : 16/01/20  Updated at:20/01/20</div>
                        <div>User1 : 2 peoples  Created at : 18/01/20  Updated at: -</div>
                        <div>User1 : 1 peoples  Created at : 18/01/20  Updated at:19/01/20</div>
                    </div>
                    <Button>Close</Button>
                </div>
                  
            </div>
    </div>
  )
}

export default Modal