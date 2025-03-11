import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogView({className,title, description, imgLink} : {title: string, description: string, className?: string, imgLink?: string}) {
    return(<div>
        <Card className={`cursor-pointer ${className}`}>
                <CardHeader>
                    <CardTitle><img src={`${imgLink}`} alt="" className="max-w-[60vw] sm:max-w-[30vw] border-2 border-gray" /></CardTitle>
                    <b>{title}</b>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card> 
      </div>);
}