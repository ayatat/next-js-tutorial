import Link from 'next/link'

export default function Home() {
  return (
    <h1>
      {/* Next.js のアプリの外にある外部のページにリンクを貼る必要があるときは、Link無しで<a>タグだけを使う */}
      {/* classNameを使う場合も、Link無しで<a>タグだけを使う */}
      Read <Link legacyBehavior href="/posts/first-post"><a>this page!</a></Link>
    </h1>
  );
}
