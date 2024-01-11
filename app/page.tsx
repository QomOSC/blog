import Landing from "./landing/page"

<link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
// function PostCard(post: Post) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.publishedAt} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
//       </time>
//       <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.raw }} />
//     </div>
//   )
// }

export default function Home() {

  return (
    <div className="main">
      <Landing></Landing>
    </div>
  )
}
