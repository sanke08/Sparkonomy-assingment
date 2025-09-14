
export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 md:py-2 md:px-8 xl:px-0 lg:max-w-6xl mx-auto">
            <button className="text-[#212529] flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 md:h-5 md:w-5"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back
            </button>
            <h1 className="font-semibold text-black">Dashboard</h1>
            <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="h-10 w-10 object-cover rounded-full"
            />
        </header>
    );
};