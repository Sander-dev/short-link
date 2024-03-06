export default function Input({ text }) {
    return (
        <>
            <input
                type="input"
                className="w-full h-11 relative m-0 -mr-0.5 block min-w-0 flex-auto border rounded-md border-solid bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] transition duration-200 ease-in-out focus:z-[3] border-brown shadow-md focus:shadow-lg focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-brown"
                placeholder={text} />
        </>
    )
}