'use client'

import { useRouter } from 'next/navigation'

export default function LinkPhrase(props) {
    const router = useRouter()
    return (
        <>
            <a onClick={() => router.push(props.route)} className="cursor-pointer font-medium text-sm text-primary-600 hover:underline dark:text-primary-500">{props.text}</a>
        </>
    )
}