import React, { useState, useEffect } from "react";
import axios from "axios";
import { isManager, isEmployee } from "../../helpers/jwthelpers";
import Router from 'next/router'

import {
    Typography,
    Grid,
    Button,
    Paper,
    FormControlLabel,
    RadioGroup,
    Radio
  } from "@material-ui/core";
export default function(props) {
    const {close, id, description, amount, type, status} = props
    const [newStatus, setNewStatus] = useState(0)

    const approve = async () => {
        var data = new FormData()
        data.append('status', '2')
        await axios({
            method: "PUT",
            url: `http://localhost:8080/api/reimbursements/${id}`,
            data: data

        })
        .then(function (res) {
            Router.reload()
        })
        .catch(e =>{
            console.log(e)
        })
    }

    const deny = async () => {
        var FormData = require('form-data');
        var data = new FormData()
        data.append('status', '3')
        await axios({
            method: "PUT",
            url: `http://localhost:8080/api/reimbursements/${id}`,
            data: data
        })
        .then(function (res) {
            Router.reload()
        })
        .catch(e =>{
            console.log(e)
        })
    }

    return (
        <>
            <div className="w-96 bg-white m-80 mt-48 h-96 items-center justify-center px-5">
                <div className="items-center justify-center">
                    <h1>
                        Reimbursement
                    </h1>
                    <h1>
                        {id}
                    </h1>
                    <h1>
                        {description}
                    </h1>
                    <h1>
                        {amount}
                    </h1>
                    <h1>
                        {type}
                    </h1>
                    <h1>
                        {status}
                    </h1>
                    {isManager && status === 'PENDING'  &&(
                        <div className="flex-row">
                            <button className="cursor-pointer bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green 700" onClick={approve}>
                                Approve
                            </button>
                            <button className="cursor-pointer bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red 700" onClick={deny}>
                                Deny
                            </button>
                        </div>
                    )}
                </div>
                
            </div>
        </>
    )
}