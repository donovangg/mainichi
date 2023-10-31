import React from 'react'
import { Button } from './ui/button'
import { cn } from '~/lib/utils'
import { useState } from 'react'
import { UserAuth } from '~/context/AuthContext'
import { useRouter } from 'next/router'
import { useToast } from './ui/use-toast'
import { FaGoogle } from 'react-icons/fa';

const UserAuthForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { signedInUser, logIn, signInWithGoogle } = UserAuth();
    const router = useRouter();
    const { toast } = useToast();

    const handleGoogleSignIn = async () => {
        setIsLoading(true);

        try {
          await signInWithGoogle();
          // Redirect to a different page after successful login
          router.push("/account"); 
        } catch (error) {
          console.error(error);
          toast({
            title: "There was a problemo",
            description: "There was an error logging in with Google",
            variant: "destructive",
          });
        } finally {
            setIsLoading(false);
        }
      };
    

  return (
    <div>
    <Button
      onClick={handleGoogleSignIn}
      isLoading={isLoading}
      size="sm"
      className="w-full"
    >
      {isLoading ? null : <FaGoogle className="h-4 w-4 mr-2" />}
    </Button>
  </div>
  )
}

export default UserAuthForm