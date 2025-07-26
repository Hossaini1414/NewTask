export default function thankYou() {
    return (
        <div className="flex flex-col mx-auto text-center  min-h-max">
            <h1 className="text-3xl md:text-6xl text-center py-9 font-font6">Thank You!</h1>
            <p className="text-md md:text-2xl ">Your massage has been successfully sent. we appreciate you reaching out to us.
            </p>
            <p className="text-md md:text-2xl ">Our team will review your massage and get back to you as possible.</p>
            <p className="text-md md:text-3xl py-4 font-font5 ">Have a great day!</p>
            <div className="flex flex-row gap-3 justify-center mx-auto py-4">
                <a href="/Contact" className="rounded-xl shadow-md border  p-2  px-6 bg-gray-400 hover:scale-110"><i
                    className="fas fa-arrow-left  "></i>
                    Back</a>
                <a href="/home" className="rounded-xl shadow-md border  p-2 px-6 bg-gray-400 hover:scale-110"><i
                    className="fas fa-home "></i>
                    Home</a>
            </div>

        </div>
    )
}