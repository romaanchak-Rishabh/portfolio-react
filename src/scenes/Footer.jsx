import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="md:h-56 bg-red pt-5 pb-5 md:pb-0">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl text-yellow">Rishabh Tater</p>
                    <p className="font-playfair text-md text-yellow">©2023 - All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer