import Link from 'next/link'


function Header() {
  return (
    <header className='flex items-center justify-between gap-4'>
      
      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl" href="">
      Igbadun </Link>
       <Link href={""}>Home</Link>
       <Link href={""}>Menu</Link>
       <Link href={""}>About</Link>
       <Link href={""}>Contact</Link>
      </nav>
      <nav className='flex items-center gap-4 text-gray-500 font-semibold'la>
      <Link href={"/login"}>Login</Link>
       <Link href={"/register"} className='bg-primary rounded-full text-white px-6 py-2'>
       Register</Link>

      </nav>
    </header>
  )
}

export default Header
