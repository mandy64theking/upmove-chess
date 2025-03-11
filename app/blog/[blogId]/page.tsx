import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CustomNavBar from "@/components/customNavBar";
import BlogView from "@/components/blogView";

type Props = {
    params: Promise<{ blogId: string }>
    searchParams: Promise<{ [blogId: string]: string | string[] | undefined }>
}

export default async function Page({params} : Props) {
    const {blogId} = await params;
    return( <div>
        <CustomNavBar />
        <div className="w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex-1/2 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-4">
            {blogId}
            </div>
        </div>
        </div>
        </div>
    );
}