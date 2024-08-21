import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
      <>
        <header className='flex justify-between mb-4 px-8 py-4 bg-black'>
          <div>LOGO</div>
          <div>
            <div>
              <Link href="/users">Usuarios</Link>
            </div>
            <div>
              <Link href="/messages">Messages</Link>
            </div>
          </div>
        </header>
        <div>{children}</div>
        <div>pie de pagina MAIN</div>
      </>
    );
}

export default UsersLayout