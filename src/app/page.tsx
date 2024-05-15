import Link from 'next/link'

export default function Home() {
  return (
    <h1>
      Read <Link legacyBehavior href="/posts/first-post"><a>this page!</a></Link>
    </h1>
  );
}
