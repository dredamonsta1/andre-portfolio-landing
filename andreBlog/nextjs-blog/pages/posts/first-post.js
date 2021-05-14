import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function FirstPost() {
    return (
        <>
            <head>
                <title>First Post</title>
            </head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    ) 
}

const OutsideSky = () => (
    <Image
        src="/images/progile.jpg"
        height={144}
        width={144}
        alt="night sky"
        />
)