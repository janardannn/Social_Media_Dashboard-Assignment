import Post from "./Post"
export default function Posts({ postsData }) {
    return (
        <div className="flex flex-col justify-center items-start">
            {/* className="lg:w-[1250px] lg:m-auto lg:mt-16 ml-2" */}
            <div className="lg:mt-16 ml-2">
                <h1 className="text-3xl">Posts Analytics</h1>
            </div>

            <div className="posts-container lg:w-[816px] my-6 ml-2 border-2 rounded-md">
                <div className="font-bold underline">
                    <Post title="Title" description="Description" likes={"Likes"} comments={"Comments"} shares={"Shares"} />
                </div>

                {
                    postsData.map((post, index) => {
                        return <Post key={post.id} title={post.title} description={post.description} likes={post.likes} comments={post.comments} shares={post.shares} />
                    })
                }

            </div>
        </div>
    )
}