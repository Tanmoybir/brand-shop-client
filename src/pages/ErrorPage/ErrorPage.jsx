

const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10 px-5 flex justify-center items-center bg-yellow-100">
            <div className="py-10 ">


                <div className="border-b border-black text-center">
                    <img className="md:flex justify-center items-center" src="https://i.ibb.co/TmjChd0/error-illustration.png" alt="" />
                    <h1 className="text-3xl font-bold pb-5">Oops! That page can't be found.</h1>
                </div>
                <p className="text-xl font-medium mt-4">We're really sorry but we can't seem to find the page you were looking for.</p>
            </div>
        </div>
    );
};

export default ErrorPage;