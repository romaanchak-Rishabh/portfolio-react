import LinkedInImg from "../assets/linkedin.png";
import GithubImg from "../assets/github.png";
import InstagramImg from "../assets/instagram.png";
import YoutubeImg from "../assets/youtube.png";


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/rishabh-tater-75a92b213/" target="_blank" rel="noreferrer">
                <img alt="linkedin-link" src={LinkedInImg} />
            </a>
            <a className="hover:opacity-50 transition duration-500 w-11 relative top-[-6px]" href="https://www.youtube.com/channel/UCxk4kccqpDaIa1E2rNcxSEA" target="_blank" rel="noreferrer">
                <img alt="youtube-link" src={YoutubeImg} />
            </a>
            <a className="hover:opacity-50 transition duration-500" href="https://github.com/romaanchak-Rishabh" target="_blank" rel="noreferrer">
                <img alt="github-link" src={GithubImg} />
            </a>
            <a className="hover:opacity-50 transition duration-500" href="https://www.instagram.com/rishabhtater14_/" target="_blank" rel="noreferrer">
                <img alt="instagram-link" src={InstagramImg} />
            </a>
        </div>
    )
}

export default SocialMediaIcons;