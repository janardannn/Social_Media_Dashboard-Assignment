import { useState } from 'react'
import NewPostBox from './NewPostBox'

export default function ScheduledPost({ id, title, description, handleDelete }) {
    const [postClicked, setPostClicked] = useState(false)

    const [newPostData, setNewPostData] = useState({
        title: title,
        description: description
    })

    const handleClick = () => {
        setPostClicked(!postClicked)
    }
    // console.log(id)

    if (!postClicked) {
        return (
            <div>
                <button onClick={handleClick} className="w-full text-left my-2 p-2 border-2 border-gray-600 rounded-md hover:bg-gray-800">
                    <div className="title-box flex">
                        <div className="font-bold mr-2">Title:</div>
                        <p className="line-clamp-1">{title}</p>
                    </div>

                    <div className="description-box mt-2">
                        <div className="font-bold mr-2">Description:</div>
                        <p className="line-clamp-3">{description}</p>
                    </div>
                </button>
            </div>
        )
    }
    else {
        let newPost = {
            title: title,
            description: description
        }
        return (
            <NewPostBox id={id} newPost={newPostData} setNewPost={setNewPostData} handleEdit={false} deletePost={true} setPostCount={handleDelete} setSaveStatus={handleClick} />
        )
    }
}