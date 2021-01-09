import Head from 'next/head'

export default function Home() {
  return (
    <div class="pt-8">
      <Head>
        <title>Randall Pace</title>
      </Head>
      <h2 className="text-3xl leading-9 font-semibold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
        Posts
      </h2>
      <ul className="pt-4 pb-6 list-disc space-y-1 mx-4">
        <li>
          <a href="#" className="text-indigo-600 font-semibold">Posting about that one thing</a>
        </li>
        <li>
          <a href="#" className="text-indigo-600 font-semibold">One more thing...</a>
        </li>
        <li>
          <a href="#" className="text-indigo-600 font-semibold">When will it ever stop?</a>
        </li>
        <li>
          <a href="#" className="text-indigo-600 font-semibold">First post</a>
        </li>
      </ul>

      Check out some <a href="#" className="text-indigo-600 font-semibold">older posts &rarr;</a>
    </div>
  )
}
