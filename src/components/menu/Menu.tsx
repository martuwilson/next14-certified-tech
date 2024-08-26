import Link from "next/link"

const Menu = () => {
  return (
    <nav className="flex flex-col">
        <ul className="mb-4">
          <li className="text-2xl pb-2 w-full hover:bg-blue-400 hover:text-white">
            <Link href="/" className="p-2 w-full flex">
            Inicio
            </Link>
          </li>
          <li className="text-2xl pb-2 w-full">
            Explorar
          </li>
          <li className="text-2xl pb-2 w-full">
            Perfil
          </li>
        </ul>
        <button className="btn-primary">
          Postear
        </button>
    </nav>
  )
}

export default Menu