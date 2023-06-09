import React from 'react'
import { Circles } from 'react-loader-spinner'
import PropTypes from 'prop-types'

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>
        <Circles
            type='Circles'
            color='00BFFF'
            height={50}
            width={200}
            className='m-5'
        />
        <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

Spinner.propTypes = {
  message: PropTypes.string
}

export default Spinner
