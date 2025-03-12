import CustomNavBar from "@/components/customNavBar";
import BlogView from "@/components/blogView";

export default function Page() {
  return (
    <div>
      <CustomNavBar />
      <div className="w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex-1/2 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-4">
            <BlogView
              title="Blog title"
              description="Blog Description"
              imgLink="/chess-board.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
