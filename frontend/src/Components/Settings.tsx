import { IconJarLogoIcon } from '@radix-ui/react-icons';
import '../index.css';
import '../styles/Profile.css';
import igLogo from "../assets/instagram-white.png";
import xLogo from "../assets/X-white.png";
import ytLogo from "../assets/youtube-white.png";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Textarea } from './ui/textarea';
import { Button } from "./ui/button";

// TODO Every single one of these fields needs to be saved by clicking the save button
// TODO The original text should be grabbed from the database
export default function EditProfile() {
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
                    <div className="text-area name">
                        <Textarea placeholder="Joe Schmoe" className="items-center">Joe Schmoe</Textarea>
                    </div>
                    <h2 className="username">joe_schmoes_username</h2>
                    <hr />
                    <h3>Partner up:</h3>
                    <div className="text-area contact-info">
                        <Textarea placeholder="joeschmoesamplemail@example.com">
                            joeschmoesamplemail@example.com
                        </Textarea>
                        <Textarea placeholder="17215554020" className="phone">17215554020</Textarea>
                    </div>
                    <hr />
                    <h3>
                        Workout Experience
                    </h3>
                    <div className="text-area">
                        <Textarea placeholder="Tell us about your workout experience:">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Leo ante fames pretium,
                            mollis non tincidunt. Amet erat et ultricies adipiscing nec habitasse.
                            Class duis ac lacus posuere nunc sagittis. Consequat massa phasellus dictumst
                            faucibus turpis efficitur per habitasse. Fringilla magna convallis placerat amet ligula.
                            Dictum ante metus laoreet metus adipiscing pharetra nulla.
                            Praesent fames pulvinar proin cubilia; est felis. Velit mi consectetur;
                            platea non sed magnis lectus.
                        </Textarea>
                    </div>
                    <hr />
                    <h3>
                        Availablity
                    </h3>
                    <div className="text-area">
                        <Textarea placeholder="What's your availability to work out?">
                            I'm available to workout on Monday, Wednesday, Friday, and Saturday at 2pm to 6pm.
                            I can also workout on Tuesday at 9am if preferred.
                        </Textarea>
                    </div>
                    <hr />
                    <h3>
                        Links
                    </h3>
                    <div className="button-container">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="button-link">
                            <Button variant="ghost" className="button">
                                <img src={igLogo} alt="Instagram" className="button-logo" />
                            </Button>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="button-link">
                            <Button variant="ghost" className="button">
                                <img src={xLogo} alt="X" className="button-logo" />
                            </Button>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="button-link">
                            <Button variant="ghost" className="button">
                                <img src={ytLogo} alt="YouTube" className="button-logo" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


