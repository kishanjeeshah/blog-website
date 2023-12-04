import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'

const Pagination = () => {

    const {page,totalpages,handlepagechange} = useContext(AppContext)
    return (
        <div className='w-full fixed bottom-0 flex justify-center bg-white font-bold border-2 p-3  text-sm'>
            <div className='flex justify-between items-center w-4/12   '>
                <div className='flex  gap-3'>
                { page>1 && 
                    (<button className='rounded-md px-2 py-1 bg-white border-2' onClick={()=>handlepagechange(page-1)}>Previous</button>)
                }
                { page < totalpages &&

                    (<button className='rounded-md px-2 py-1 bg-white border-2' onClick={()=>handlepagechange(page+1)}>Next</button>)
                }
                </div>
            
                <p>
                    Page {page} of {totalpages}
                </p>
            </div>

        </div>
    )
}

export default Pagination