import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserAvatar = ({user, ...props}) => {
  return (
    <Avatar>
            {user.image ? (
            <div className="relative aspect-square h-full w-full">
                <AvatarImage src={user.image} alt="profile pic" referrerPolicy='no-referrer' />
                <span>Avi image</span>
            </div>
        ) : (
            <AvatarFallback>
                <span className="sr-only">{user?.name}</span>
                <AvatarImage src='/assets/bocchi.jpg' alt="profile pic" referrerPolicy='no-referrer' />
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar