import CustomNavBar from "@/components/customNavBar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default function Page() {
    return(
        <div>
        <CustomNavBar />
        <div className="min-h-[100vh] flex flex-col items-center justify-center pt-[20vh] w-[80vw] m-auto">
           <h1 className="font-bold text-3xl text-center">What we do differently?</h1>
        <div className="pt-15 grid mb-5 sm:grid-cols-3 gap-5 ">
        <Card className="w-[80vw] sm:w-[25vw] m-auto dark:bg-muted">
            <CardHeader>
                <CardTitle className="text-center">Personalized Coaching</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-center">
                    <p>Our coaches provide personalized coaching and assignments to each student. We understand that every student is different and has unique needs.</p>
                </CardDescription>
            </CardContent>
        </Card>
        <Card className="w-[80vw] sm:w-[25vw] m-auto dark:bg-muted">
            <CardHeader>
                <CardTitle className="text-center">Focus on Improving from Mistakes</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-center dark:bg-muted">
                    <p>Our coaches believe that the best way to learn is by making mistakes. We encourage our students to learn from their mistakes and improve their game.</p>
                </CardDescription>
            </CardContent>
        </Card>
        <Card className="w-[80vw] sm:w-[25vw] m-auto dark:bg-muted">
            <CardHeader>
                <CardTitle className="text-center">Tournament Planning and Preparation</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-center">
                    <p>Our coaches help our students plan and prepare for tournaments. We provide them with the necessary resources and support to succeed.</p>
                </CardDescription>
            </CardContent>
        </Card>
        </div>
            <h1 className="font-bold text-xl text-center pt-8">Upmove Chess Academy is operational since 2023</h1>
            <h1 className="text-muted-foreground text-center">and is an established name in mentoring students to become better chess players!</h1>
            <h1 className="font-bold text-xl pt-8">Presence in</h1>
            <h1 className="text-muted-foreground text-center">USA | India | Canada | Germany | Poland | UAE | Singapore | New Zealand</h1>
        </div>
        </div>
    );
}