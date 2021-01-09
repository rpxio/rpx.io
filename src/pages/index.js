import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>rpx.io</title>
      </Head>
      <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        helloworld
      </h1>
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
        <MarkdownSample />
      </div>
    </div>
  )
}
