export default function NewPostBox({ newPost, setNewPost, handleEdit }) {

    const handleTitleChange = (e) => {
        setNewPost({ ...newPost, title: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setNewPost({ ...newPost, description: e.target.value })
    }

    return (
        <div>
            <div className="w-full text-left my-2 p-2 border-2 border-gray-600 rounded-md">
                <div className="title-box">
                    <div className="font-bold mr-2">Title:</div>
                    <textarea type="text" value={newPost.title} onChange={handleTitleChange} className="w-full h-[115px] my-2 bg-transparent border-2 p-2 rounded-md" placeholder="Enter title here" maxLength={160} />
                </div>

                <div className="description-box mt-2">
                    <div className="font-bold mr-2 mt-4">Description:</div>
                    <textarea type="text" value={newPost.description} onChange={handleDescriptionChange} className="w-full h-[180px] my-2 bg-transparent border-2 px-2 rounded-md" placeholder="Enter title here" />
                </div>
                <button className="my-2 mx-4 border-2 w-[160px] rounded-md p-2 bg-green-700 bg-opacity-20 hover:bg-opacity-100">Add</button>
                <button className="my-2 mx-4 border-2 w-[160px] rounded-md p-2 bg-red-700 bg-opacity-20 hover:bg-opacity-100">Cancel</button>
            </div>
        </div>
    )
}