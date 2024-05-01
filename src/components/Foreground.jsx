import React, { useRef} from 'react'
import Card from './Card';


const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "Welcome to our file management app, designed to streamline your document" ,
            filesize: '0.4 mb',
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download Now", tagColor: "blue"
            },
        },
        {
            desc: "Welcome to our file management app, designed to streamline your document" ,
            filesize: '0.5 mb',
            close: true,
            tag: {
                isOpen: false, tagTitle: "Upload", tagColor: "green"
            },
        },
        {
            desc: "Welcome to our file management app, designed to streamline your document" ,
            filesize: '0.8 mb',
            close: true,
            tag: {
                isOpen: true, tagTitle: "Download Now", tagColor: "green"
            },
        },
        {
            desc: "Welcome to our file management app, designed to streamline your document" ,
            filesize:'1.2 mb',
            close: false,
            tag: {
                isOpen: false, tagTitle: "Upload", tagColor: "blue"
            },
        },
        {
            desc: "Welcome to our file management app, designed to streamline your document" ,
            filesize: '1 mb',
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download Now", tagColor: "blue"
            },
        }
    ];

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5'>
            {data.map((item, index)=>(
                <Card key={index} data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground
