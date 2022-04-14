import React from 'react'
import Layout from '../../components/layout';
import axios from 'axios';
import Link from 'next/link'
import {
    Button,
    TextField
  } from "@material-ui/core";

export default function add() {
    const postReimbursement = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/reimbursements',
            data: {
                amount: document.getElementById('amount').value,
                description: document.getElementById('description').value,
                status: document.getElementById('status').value,
                type: document.getElementById('type').value
                
            }
        })
        .catch(function(e) {
            console.log(e)
        })
    }
  return (
    <Layout>
        <h1 className='text-2xl pt-6'>New Reimbursement</h1>
         <form noValidate>
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="amount"
              label="Amount"
              name="amount"
              autoComplete="amount"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="description"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="type"
              label="Type"
              id="type"
              autoComplete="type"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="status"
              label="Status"
              id="status"
              autoComplete="status"
            />
            
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href='/'
              className=''
              onClick={postReimbursement}
            >
              Submit
            </Button>
          </form>
    </Layout>
  )
}
