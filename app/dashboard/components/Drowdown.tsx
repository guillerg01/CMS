'use client';

import { Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

import React from 'react'

const Drowdown = () => {
  return (
    <Dropdown  inline label="">
      <Dropdown.Header>
       
        <span className="block truncate text-sm font-medium">
          correo por ahora no
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiViewGrid}>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        Settings
      </Dropdown.Item>
     
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  )
}

export default Drowdown
