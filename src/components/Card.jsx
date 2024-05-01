import React from 'react';
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Card = ({ data , reference}) => {
    return (
        <motion.div 
            drag 
            dragConstraints={reference} 
            whileDrag={{scale : 1.1}} 
            dragElastic={0.1} 
            dragTransition={{bounceStiffness: 100, bounceDamping: 40}}
            className='relative flex-shrink-0 w-60 h-72 rounded-[40px] text-white bg-zinc-700/70 px-7 py-10 overflow-hidden'
        >
            <lord-icon
                style={{ "width": "22px", "height": "22px" }}
                src="https://cdn.lordicon.com/rbbnmpcf.json"
                trigger="hover"
                colors="primary:#ffffff">
            </lord-icon>
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0 '>
                <div className='flex items-center justify-between py-3 px-7 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
                        {data.close ? <lord-icon
                            style={{ "width": "250px", "height": "250px" }}
                            src="https://cdn.lordicon.com/nqtddedc.json"
                            trigger="hover"
                            colors="primary:#ffffff">
                        </lord-icon> : <LuDownload size='.9em' color='#fff' />}

                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    ) 
                }

            </div>
        </motion.div>
    )
}

export default Card
