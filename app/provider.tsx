"use client"
import { supabase } from '@/services/supabaseClient'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/UserContext';

export default function Provider({ children }: any) {
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        const CreateNewUser = () => {
            supabase.auth.getUser().then(async ({ data: { user } }) => {
                const { data: Users, error } = await supabase.from("Users").select("*").eq("email", user?.email)

                console.log(Users)
                if (Users?.length === 0) {
                    const { data, error } = await supabase.from("Users").insert([
                        {
                            name: user?.user_metadata?.name,
                            email: user?.email,
                            picture: user?.user_metadata?.picture
                        }
                    ])
                    console.log(data)
                    setUser(data)
                    return;
                }
                setUser(Users[0])
            })
        }
        CreateNewUser()
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserContext.Provider>
    )
}


export const useUser = () => {
    const context = useContext(UserContext)
    return context
}
