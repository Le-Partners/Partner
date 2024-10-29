import { IconJarLogoIcon } from '@radix-ui/react-icons';
import '../index.css';
import '../styles/Profile.css';
import igLogo from "../assets/instagram-white.png";
import xLogo from "../assets/X-white.png";
import ytLogo from "../assets/youtube-white.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Profile() {
    return (
        <div className="two-column-layout">
            <div className="column left-column">
                <Avatar className="profile-avatar">
                    <AvatarImage className="profile-avatar-image" />
                    <AvatarFallback className="fallback">
                        PT
                    </AvatarFallback>
                </Avatar>
            </div>

            <div className="column main-column">
                <div className="profile-body">
                    <h1 className="name">Joe Schmoe</h1>
                    <h2 className="username">joe_schmoes_username</h2>
                    <hr />
                    <h3>Partner up:</h3>
                    <div className="contact-info">
                        <span>joeschmoesamplemail@example.com</span>
                        <span className="phone">+1-721-555-4020</span>
                    </div>
                    <hr />
                    <h3>
                        Workout Experience
                    </h3>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Leo ante fames pretium,
                        mollis non tincidunt. Amet erat et ultricies adipiscing nec habitasse.
                        Class duis ac lacus posuere nunc sagittis. Consequat massa phasellus dictumst
                        faucibus turpis efficitur per habitasse. Fringilla magna convallis placerat amet ligula.
                        Dictum ante metus laoreet metus adipiscing pharetra nulla.
                        Praesent fames pulvinar proin cubilia; est felis. Velit mi consectetur;
                        platea non sed magnis lectus.
                    </p>
                    <hr />
                    <h3>
                        Availablity
                    </h3>
                    <p>
                        I'm available to workout on Monday, Wednesday, Friday, and Saturday at 2pm to 6pm.
                        I can also workout on Tuesday at 9am if preferred.
                    </p>
                    <hr />
                    <h3>
                        Links
                    </h3>
                    <div className="button-container">
                        <Button variant="ghost" className="button">
                            <img src={igLogo} alt="Instagram" className="button-logo" />
                        </Button>
                        <Button variant="ghost" className="button">
                            <img src={xLogo} alt="X" className="button-logo"/>
                        </Button>
                        <Button variant="ghost" className="button">
                            <img src={ytLogo} alt="YouTube" className="button-logo" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}


