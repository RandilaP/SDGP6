export default function VolunteerSignIn() {
    return (
        <div className='w-1/2 h-3/4 shadow-2xl rounded-2xl'>
            <button type="button"
                    className="flex items-center justify-center ml-4 mt-5 text-sm text-gray-700  rounded-lg gap-1">
                <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                </svg>
                <span>Back</span>
            </button>
            <div className='flex flex-col items-center justify-center top-1 w-full h-full  space-y-8 bg-white rounded-2xl'>
                <h1 className='text-2xl font-bold text-center text-gray-800 '>Sign In as a Volunteer</h1>
                <form className='flex flex-col items-center justify-center w-full space-y-8'>
                    <input type='text' placeholder='Email or Contact Number'
                           className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] outline-none'/>
                    <input type='password' placeholder='Password'
                           className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] rounded-lg outline-none'/>
                    <button type='submit' className='w-3/4 h-12 text-sm text-white bg-[#8260E2] rounded-lg'>Sign In</button>
                </form>
            </div>
        </div>
    )
}
