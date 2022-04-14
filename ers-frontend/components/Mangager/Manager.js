import React from "react";
import {getHeaders} from "../../utils/query"
import Reimbursement from '../Reimbursement/Reimbursement'
import useSessionStorage from "../../hooks/useSessionStorage";
import useSWR from 'swr'
import axios from 'axios'
import { getReimbursements } from '../../utils/query'
import Link from "next/link";

const Manager = ({reimbursements}) => {
	console.log(reimbursements);
	return (
		<>
			<div className='bg-gray-100rounded-md my-2 shawdow-lg'>
				<div className='flex items-center justify-between mb-2'>
					<a/>
					<span className='text-xl text-gray-800 font-bold'>
						Amount
					</span>
					<span className='text-xl text-gray-800 font-bold'>
						Type
					</span>
					<span className='text-xl text-gray-800 font-bold'>
						Status
					</span>
				</div>
			</div>
			{reimbursements.map((reimbursement) => (
				<Reimbursement key={reimbursement.id} reimbursement={reimbursement}/>
			))}
			{/* <div className='flex items-center h-20 w-ful'>
				<Link href='/reimbursements/add'>
				<button
					offset={50}
					duration={500} 
					className="cursor-pointer bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
				>
					Submit a new Requst
				</button>					
				</Link>
			</div> */}
		</>
	)
}

export default Manager;