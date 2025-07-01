import Header from "./Header"
export default function Feedback() {
    return (
        <div className="bg-[#121212] min-h-screen -mt-12 text-[#f2f2f2] flex flex-col gap-8 items-center px-6 py-12">
            <Header />
            <textarea name="" id=""
                className="border-2 rounded-lg border-white text-white bg-[#121212] h-[25rem] resize-none overflow-auto w-[75rem] p-4 text-xl"
                placeholder="Write a feeback to submit"
            ></textarea>
            <div className="flex gap-16">
                <button className='bg-[#00f0ff] text-xl rounded text-[#1e1e1e] p-2 px-4 transition-all font-semibold duration-300 hover:scale-110'>Submit</button>
                <button className='border-2 text-xl font-semibold p-2 px-4 rounded hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all duration-300 hover:scale-110'>Clear</button>
            </div>
        </div>
    )
}