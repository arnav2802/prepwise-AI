import React from 'react'
import Agent from "@/components/Agent"

const Page = () => {
    return (
        <>
            <h3 >
                Interview Generation
                <Agent userName="You" userId="user1" type="generate"/>

            </h3>
        </>
    )
}
export default Page
