import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CustomNavBar from "@/components/customNavBar";
import BlogView from "@/components/blogView";

export default function Page({ params }: { params: { blogId: string } }) {
    return( <div>
        <CustomNavBar />
        <div className="w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex-1/2 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-4">
            {params.blogId}
            </div>
        </div>
        </div>
        </div>
    );
}