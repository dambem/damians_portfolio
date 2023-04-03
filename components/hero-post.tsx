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
        {/* <button className="btn btn-primary">Get Started</button> */}

      </div>
    </div>
    </div>

    // <section>
    //   <div className="mb-8 md:mb-16">
    //     <CoverImage title={title} src={coverImage} slug={slug} />
    //   </div>
    //   <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
    //     <div>
    //       <div>
    //         {tag}
    //       </div>
    //       <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
    //         <Link
    //           as={`/posts/${slug}`}
    //           href="/posts/[slug]"
    //           className="hover:underline"
    //         >
    //           {title}
    //         </Link>
    //       </h3>
    //       <div className="mb-4 md:mb-0 text-lg">
    //         <DateFormatter dateString={date} />
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    //       {/* <Avatar name={author.name} picture={author.picture} /> */}
    //     </div>
    //   </div>
    // </section>
  )
}

export default HeroPost
