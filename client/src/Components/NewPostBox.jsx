import axios from 'axios'

export default function NewPostBox({ id, newPost, setNewPost, handleEdit, deletePost, setPostCount, setSaveStatus }) {

    const handleTitleChange = (e) => {
        setNewPost({ ...newPost, title: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setNewPost({ ...newPost, description: e.target.value })
    }

    const handleAdd = async (e) => {
        if (deletePost) {
            await axios.put("http://127.0.0.1:8000/api/scheduledposts/" + id + "/", { title: newPost.title, description: newPost.description })
            setSaveStatus(prev => prev + 1)
            handleEdit(false)
        }
        else {
            try {
                await axios.post("http://127.0.0.1:8000/add_scheduled_post", { title: newPost.title, description: newPost.description })
                setSaveStatus(prev => prev + 1)
            }
            catch (err) {
                console.log(err)
            }

            handleEdit(false)
        }
    }

    const handleCancel = async (e) => {
        // console.log("here")
        if (deletePost) {
            await axios.delete("http://127.0.0.1:8000/api/scheduledposts/" + id + "/")
            setPostCount((prev) => prev - 1)
        }
        else {
            handleEdit(false)
        }

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
                <button onClick={handleAdd} className="my-2 mx-4 border-2 w-[160px] rounded-md p-2 bg-green-700 bg-opacity-20 hover:bg-opacity-100">{deletePost ? "Save" : "Add"}</button>
                <button onClick={handleCancel} className={"my-2 mx-4 border-2 w-[160px] rounded-md p-2 bg-opacity-20 hover:bg-opacity-100" + (deletePost ? "  bg-red-700" : " bg-slate-600")}>{deletePost ? "Delete" : "Cancel"}</button>
            </div>
        </div>
    )
}