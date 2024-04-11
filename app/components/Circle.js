import Image from 'next/image'


export default function Circle( props ) {
    return (
        <div className='flex justify-center items-center bg-brown2/80 w-16 h-16 rounded-full'>
            <Image
                width={100}
                height={100}
                alt='Icon capybara'
                src={props.img}
                className='rounded-full opacity-60'>
            </Image>
        </div>
    )
}