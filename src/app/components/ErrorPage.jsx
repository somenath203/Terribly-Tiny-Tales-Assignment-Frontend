const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-200 to-violet-200 flex flex-col justify-center items-center text-center gap-10">

            <p className="text-7xl font-bold text-violet-600">
                <i className="fa-solid fa-bug"></i>
            </p>

            <p className="font-bold font-poppins text-lg px-10 text-center tracking-wider text-violet-700">Something went Wrong!! Please try again after some time.</p>

        </div>
    )
};

export default ErrorPage;