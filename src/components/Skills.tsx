import React from 'react'
import Image from 'next/image'
import skillsPng from './../../assets/skills.png';

const skills = () => {
  return (
    <Image height={650} width={650} src={skillsPng} alt='skills' />
  )
}

export default skills