export default function InfoCards(){
    return(
        <>
        <div className="infoCards w-full lg:mt-20 mb-10 md:mb-10" >
            {/* heading */}
            <div className="heading w-full md:flex md:justify-center flex justify-center">
            <div className="w-80 text-center md:w-6xl md:text-center" style={{fontFamily:"monospace"}}>
                <h1 className="text-md md:text-5xl text-gray-900 text-center">
                    Simplify agent management and task distribution
                </h1>
            </div>
            </div>

            {/* All cards */}   
            <div className="cards w-full grid grid-cols-2 mt-20 px-4 place-content-center mx-auto md:grid-cols-4 md:place-items-center md:gap-6 md:mt-20 md:px-4">
                
                {/* card 1 */}
                <div className="card1 w-40 h-60 p-2 mb-10 md:mb-0 hover:scale-105 rounded-2xl md:w-55 md:h-80 bg-[#1C1C1E] border border-[#2C2C2E] lg:p-6 shadow-lg">
                    <h1 className="text-gray-300 lg:text-xl">Secure Admin Login</h1>
                    <p className="text-gray-300 lg:text-xl py-10">
                        JWT-based authentication ensures secure access for admins and authorized users.
                    </p>
                </div>

                {/* card 2 */}
                <div className="card1 w-40 h-60 p-2 mb-10 md:mb-0 hover:scale-105 rounded-2xl md:w-55 md:h-80 bg-[#1C1C1E] border border-[#2C2C2E] lg:p-6 shadow-lg">
                    <h1 className="text-gray-300 lg:text-xl">Agent Management</h1>
                    <p className="text-gray-300 lg:text-xl py-10">
                        Easily create, view, and manage agents with email, phone, and secure credentials.
                    </p>
                </div>

                {/* card 3 */}
                <div className="card1 w-40 h-60 p-2 hover:scale-105 rounded-2xl md:w-55 md:h-80 bg-[#1C1C1E] border border-[#2C2C2E] lg:p-6 shadow-lg">
                    <h1 className="text-gray-300 lg:text-xl">CSV Upload & Validation</h1>
                    <p className="text-gray-300 lg:text-xl py-10">
                        Upload CSV files with task data and validate formats before processing.
                    </p>
                </div>

                {/* card 4 */}
                <div className="card1 w-40 h-60 p-2 hover:scale-105 rounded-2xl md:w-55 md:h-80 bg-[#1C1C1E] border border-[#2C2C2E] lg:p-6 shadow-lg">
                    <h1 className="text-gray-300 lg:text-xl">Smart Task Distribution</h1>
                    <p className="text-gray-300 lg:text-xl py-10">
                        Tasks are distributed equally among agents and stored securely in MongoDB.
                    </p>
                </div>

            </div>
        </div>
        </>
    )
}
