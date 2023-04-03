import Link from 'next/link'
type Props = {
  home?: boolean
}

const Header = ({home}: Props) => {
  return (
    <>
      {home ? (
        <>
        </>
      ):(
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Blog.

        </Link>
        </h2>
      )
    }
    </>
  )
}

export default Header
