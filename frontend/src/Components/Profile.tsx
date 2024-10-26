import NavBar from './NavBar';
import '../styles/profile.css'

// TODO hook this page up to the database instead of hardcoding the data
export default function Profile() {
    return (
        <div className="flex flex-col h-screen ml-0 pl-0">
            <NavBar />
            <div className="absolute left-0 flex-grow" style={{ paddingTop: "8rem", left: "25%" }}>
                {/* Name and username */}
                <div>
                    <h1 className="text-5xl font-bold text-left">
                        Joe Schmoe
                    </h1>
                    {/* TODO add a monospaced font for the username */}
                    <p className="text-xl text-left mt-4">
                        joe_schmoes_username
                    </p>
                    {/* TODO the line looks a little weird since it's not centered */}
                    <hr className="my-6 mx-auto w-full border-t border-gray-300" />
                </div>
                <div className="profile-section">
                    <h2>
                        Contact:
                    </h2>
                    <p>
                        joeschmoesamplemail@example.com
                    </p>
                </div>
            </div>
        </div>
    );
}
