import {
  Blog,
  BlogDescription,
  BlogImage,
  BlogText,
  BlogTitle,
} from "@/components/blog";
import CustomNavBar from "@/components/customNavBar";

type Props = {
  params: Promise<{ blogId: string }>;
  searchParams: Promise<{ [blogId: string]: string | string[] | undefined }>;
};

export default async function Page({ params }: Props) {
  const { blogId } = await params;
  return (
    <div>
      <CustomNavBar />
      <div className="w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex flex-col justify-center items-center">
          <Blog>
            <BlogTitle title="Test Title" />
            <BlogDescription description="Test Description" />
            <BlogImage
              imgLink="/chess-board.jpg"
              imgDescription="Image Footer"
            />
            <BlogText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, harum
              repellat numquam velit natus voluptate quam nesciunt eos
              cupiditate commodi quis doloribus doloremque enim. Tenetur
              voluptas cupiditate consectetur pariatur quos?
            </BlogText>
          </Blog>
        </div>
      </div>
    </div>
  );
}
