import React, { useEffect, useRef, useState } from 'react'
import { Home } from './Home'
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import {useStateValue} from'../context/StateProvider';
import { dummyData, heroData } from '../utils/data';


const MainContainer = () => {
    const [{foodItems},dispatch] = useStateValue()

    const [scrollValue, setScrollValue]=useState(0)

    useEffect(()=>{},[scrollValue])
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center  '>
            <Home/>

            <section className='w-full my-6'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-2xl font-semibold capitalize text-headingColor relative
                    before:absolute before-rounded-lg before:content before:w-32 before:h-1
                    before:-bottom-1 before:left-0 before:bg-orange-600 
                    transition-all ease-in-out
                    duration-100'>Fresh and healthy fruits</p>


                    <div className='hidden md:flex gap-3 items-center'>
                        <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
                        transition-all duration-100 ease-in-out hover:shadow-lg flex items-center 
                        justify-center' onClick={()=>setScrollValue(-200)}
                        >


                            <MdChevronLeft className='text-lg text-white'/>
                        </motion.div>
                        <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
                        transition-all duration-100 ease-in-out hover:shadow-lg flex items-center 
                        justify-center' onClick={()=>setScrollValue(200)}>
                        <MdChevronRight className='text-lg text-white'/></motion.div >
                    </div>
                </div>
                {/* {heroData && heroData.map(n=>(
                    <RowContainer flag={true} data={heroData}/>
                ))}  */}
                <RowContainer 
                scrollValue={scrollValue}
                flag={true} 
                data={dummyData?.filter((n)=>n.category==="fruits")}/>
            </section>
        </div>
    )
}

export default MainContainer