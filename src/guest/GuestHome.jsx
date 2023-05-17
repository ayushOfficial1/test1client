import React from 'react'
import Nav from '../common/Nav'
import GuestNav from './GuestNav'
import { Box, Paper } from '@mui/material'
import {myHero} from '../other/myHero'
import {rightBar} from '../other/rightBar'
import {sideBar} from '../other/sideBar'
import Body from '../common/Body'

const GuestHome = () => {
  return (
    <>
    <GuestNav/>
    <Body/>
    </>
  )
}

export default GuestHome