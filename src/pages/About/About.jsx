


const About = () => {
    return (
        <div className="px-3 my-10">
            <div className="text-center px-2">
                <h1 className="text-5xl font-bold">Luxury & high-end technology products</h1>
                <p className="text-xl font-medium mt-5">Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center mt-5 px-4">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-yellow-400">12K</h1>
                    <p className="text-4xl font-semibold">Technology product</p>
                </div>
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-yellow-400">2K</h1>
                    <p className="text-4xl font-semibold">Employees</p>
                </div>
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-yellow-400">20K</h1>
                    <p className="text-4xl font-semibold">Happy Users</p>
                </div>
            </div>
            <div className="mt-10 px-4">
                <img src="https://i.ibb.co/yFdc1sq/teammat.jpg" alt="" />
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-14">
                <p className="flex-1 text-4xl font-semibold mt-6 px-2">“ Our work does make sense
                    only if it is a faithful witness
                    of his time. ”</p>
                <img className="flex-1 px-4" src="https://i.ibb.co/9YGxK8Y/employess.jpg" alt="" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 px-4">
                <div className="grid grid-cols-2 mt-8 lg:mt-0 ">
                    <img src="https://i.ibb.co/7YSHJdw/team-1.jpg" alt="" />
                    <img src="https://i.ibb.co/ZNC8B82/team-2.jpg" alt="" />
                    <img src="https://i.ibb.co/3CdWz8V/team-4.jpg" alt="" />
                    <img src="https://i.ibb.co/JFWp3f6/team-3.jpg" alt="" />
                </div>
                <div className="">
                    <h1 className="text-2xl font-medium">The. <br />
                        Our Team. <br />
                        Press.</h1>
                        <p></p>
                </div>
            </div>
        </div>
    );
};

export default About;