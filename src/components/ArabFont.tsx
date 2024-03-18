import React from 'react'

type Props = {}

const ArabFont = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className='text-2xl'>{children}</span>
    )
}

export default ArabFont