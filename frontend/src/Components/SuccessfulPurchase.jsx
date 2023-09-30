import React, { Component } from 'react'
import {Typography,styled} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const SuccessIcon=styled(CheckIcon)`
  font-size:105px;
  color:green;
  border-radius:50%;
  border:2px solid;
`

export default class SuccessfulPurchase extends Component {
  render() {
    return (
      <div className='text-center mt-10'>
        <SuccessIcon/>
        <Typography variant="h3">Purchase successfull</Typography>
      </div>
    )
  }
}
