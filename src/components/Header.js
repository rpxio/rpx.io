import Link from 'next/link'
import profileImg from '@/img/randall.jpg'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Blog Home" className="flex items-center font-semibold">
            <img src={profileImg} className="w-12 h-12 rounded-full shadow mr-4" />
            Randall Pace
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a href="#">
          Menu Item
        </a>
      </div>
    </header>
  )
}
