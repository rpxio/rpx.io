import Link from 'next/link'
import profileImg from '@/img/randall.jpg'

export default function Header() {
  return (
    <header className="mx-auto container py-4 sm:py-10">
      <div class="flex items-center">
        <Link href="/">
          <a aria-label="Blog Home" className="flex items-center font-semibold mr-8">
            <img src={profileImg} className="sm:w-32 sm:h-32 h-20 w-20 rounded-full" />
          </a>
        </Link>
        <div className="space-y-0 sm:space-y-2">
          <h1 className="text-2xl leading-9 font-semibold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">Randall Pace</h1>
          <svg className="h-6 w-6 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038a6.62 6.62 0 01-1.885.517 3.299 3.299 0 001.443-1.816 6.59 6.59 0 01-2.085.795 3.273 3.273 0 00-2.396-1.036 3.281 3.281 0 00-3.197 4.03A9.329 9.329 0 011.114 2.1 3.243 3.243 0 00.67 3.75c0 1.14.58 2.143 1.46 2.732a3.278 3.278 0 01-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22a3.336 3.336 0 01-1.482.056 3.287 3.287 0 003.067 2.28 6.592 6.592 0 01-4.077 1.404c-.265 0-.526-.015-.783-.045a9.303 9.303 0 005.032 1.474c6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425a6.67 6.67 0 001.638-1.7z"/></svg>        </div>
      </div>
    </header>
  )
}