import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
    return (
        <div className=" cursor-pointer   ">
        <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" className="rounded-lg"/></div>
        <div>
            <h3 className="text-2xl mt-2">
                {title}
            </h3>

        </div>
    </div>
    )
}

export default MediumCard
