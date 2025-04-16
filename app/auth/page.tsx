"use client"
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import { AtSign } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Login() {
    const signInWithGoogle = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: "google"
        })
        if(error){
            console.log("Error", error.message)
        }
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col items-center border rounded-xl overflow-hidden gap-5 p-5'>
            {/* <h1 className='text-2xl font-bold text-center'>Hey Hire</h1> */}
            <Image 
                src={'./signup-illustration.svg'}
                width={600}
                height={400}
                className=''
                alt='Sign up'
            />
            <h1 className='text-2xl font-bold text-center'>Welcome to Hey Hire</h1>
            <p className='text-muted-foreground font-semibold'> Sign In</p>
            <Button onClick={signInWithGoogle} className='w-full'> <AtSign/> Login with Google</Button>
        </div>
    </div>
  )
}
