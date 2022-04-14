import Link from 'next/link'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from './Details';
import {Modal} from "@material-ui/core"
import { isEmployee } from '../../helpers/jwthelpers';
function Reimbursement({reimbursement}) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <Modal
        open={showDetails}
        onClose={()=>{setShowDetails(false)}}
        
      >
        <Details 
          onClose={() => {setShowDetails(false)}}
          id={reimbursement.id}
          description={reimbursement.description}
          amount={reimbursement.amount}
          type={reimbursement.type}
          status={reimbursement.status}
        />

      </Modal>
      <div onClick={() => setShowDetails(true)}>
        <div className='bg-gray-100 p-4 rounded-lg my-2 shawdow-lg hover:bg-gray-200'>
          <div className='flex items-center justify-between mb-2'>
              <span className='text-xl text-gray-800 font-bold'>
                  id: {reimbursement.id}
              </span>
              <span className='text-xl text-gray-800 font-bold'>
                  {reimbursement.amount}
              </span>
              <span className='text-xl italic text-gray-800 font-bold'>
                  {reimbursement.type}
              </span>
              <span className='text-xl italic text-gray-800 font-bold'>
                  {reimbursement.status}
              </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reimbursement