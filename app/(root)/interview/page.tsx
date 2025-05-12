import React from 'react'
import Agent from "@/components/Agent"
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser()
    return (
        <>
            <h3 >
                Interview Generation
                <Agent userName={user?.name} userId={user?.id} type="generate"/>

            </h3>
        </>
    )
}
export default Page
