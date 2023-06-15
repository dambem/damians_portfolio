import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  tag: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  tag,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(`+coverImage+`)` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
      <Link
              as={`/posts/${slug}`}
               href="/posts/[slug]"
               className="hover:underline"
             >         <h1 className="mb-5 text-5xl font-bold">{title}</h1>

              </Link>
        <p className="mb-5">{excerpt}</p>

      </div>
    </div>
    </div>
  )
}

export default HeroPost
