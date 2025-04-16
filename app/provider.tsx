"use client"
import { supabase } from '@/services/supabaseClient'
import React, { useEffect } from 'react'

export default function Provider({children}:any) {
    useEffect(() => {
        const CreateNewUser = () => {
            supabase.auth.getUser().then(async({data:{user}}) => {
                const {data:Users, error} = await supabase.from("Users").select("*").eq("email", user?.email)

                console.log(Users)
                if(Users?.length === 0){
                    const {data, error} = await supabase.from("Users").insert([
                        {
                            name: user?.user_metadata?.name,
                            email: user?.email,
                            picture: user?.user_metadata?.picture
                        }
                    ])
                    console.log(data)
                }
            })
        }
    CreateNewUser()
    },[])
  return (
    <div>{children}</div>
  )
}
