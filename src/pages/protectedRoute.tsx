import React from 'react'
import { useSession , signOut} from 'next-auth/react'

const protectedRoute = () => {
  const { data: session} = useSession();

  if(session) {
    return(
      <>
        <p>Add to your watchlist {session.user.name}</p>
      </>
    )
  } else {
    return(
      <div>
        sign in dawg
      </div>
    )
  }
}

export default protectedRoute