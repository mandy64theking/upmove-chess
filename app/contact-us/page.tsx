import CustomNavBar from "../customNavBar";

export default function Page() {
    return(
        <div>
        <CustomNavBar />
        <div className="sm:h-[90vh] w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex-1/2 flex flex-col justify-center items-center">
            <h1 className="text-foreground bg-background font-bold text-4xl text-center">Contact Us!</h1>
            <h1 className="p-2 pl-10 pr-10 pt-10 sm:pl-20 sm:pr-20 text-foreground bg-background text-center">Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.</h1>
            <div className="flex flex-row items-center">
            <a href="mailto:upmovechess@gmail.com"><img src="email.png" className="max-w-8 pl-1 pr-2 dark:invert"></img></a>
            <h1> upmovechess@gmail.com</h1>
            </div>
            <div className="flex flex-row items-center">
            <a href="https://wa.me/919028698447"><img src="whatsapp.png" className="max-w-8 pl-1 pr-2 dark:invert"></img></a>
            <h1> +91-9028698447</h1>
            </div>
        </div>
        <div className="flex-1/2 flex justify-center sm:pt-[15vh] pb-5"><img src="analog-clock.jpg" className="bg-cover rounded-full object-cover max-h-[45vh] w-[45vh] sm:max-h-[55vh] sm:w-[55vh]" alt="Chess Pieces" /></div>
        </div>
        </div>
    );
}