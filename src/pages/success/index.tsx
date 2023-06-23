import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
        <h2>Thanks for signing up!! </h2>
        <div>
            Go to the <Link href="/">Schedule</Link>
        </div>
    </div>
  )
}

export default Home