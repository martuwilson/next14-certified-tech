import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MessagePostForm = () => {
    
    // 
  
    return (
      <div className="mb-4 grid grid-cols-12">
        <div className="w-full h-full mt-1 text-center mb-4 block relative col-span-2 flex items-center justify-center">
          <Image
            src={
              "https:i.pinimg.com/564x/1b/2d/c0/1b2dc0ce77080e4a682fbbfd2eb3b0c1.jpg"
            }
            alt={""}
            className="rounded-full"
            width={60}
            height={60}
            /* se puede hacer con width y height sin necesidad del block, relative, etc */
            priority
          />
        </div>
        <div className="flex flex-col ml-4 mt-2 col-span-10">
            <textarea rows={4} className='resize-none p-4 w-full mb-4 rounded bg-gray-50 border border-gray-200' placeholder='En que estas pensando?'></textarea>
          <div className='flex justify-end'>
          <button className="btn-primary uppercase font-semibold">
            Postear
          </button>
          </div>
        </div>
      </div>
    );
}

export default MessagePostForm