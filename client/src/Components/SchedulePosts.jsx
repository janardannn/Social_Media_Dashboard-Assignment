import { useState, useEffect } from "react"

import AddPost from "./AddPost"
import ScheduledPost from "./SPost"
import NewPostBox from "./NewPostBox"


export default function ScheduledPosts() {

    const [editStatus, setEditStatus] = useState(false)

    const [newPostData, setNewPostData] = useState({
        title: "",
        description: ""
    })

    console.log(newPostData)

    const handleEdit = () => {
        setEditStatus(!editStatus)
    }

    return (
        <div className="post-schedule">
            <div className="lg:w-[430px] w-[400px] h-fit border-2 rounded-md m-2 p-2">
                <p className="lg:text-xl mb-2">Schedule posts for later</p>
                <div>
                    <AddPost onClick={handleEdit} />
                    {editStatus && <NewPostBox newPost={newPostData} setNewPost={setNewPostData} handleEdit={handleEdit} />}
                    <ScheduledPost title="Post 1 adkjahdjakjdh" description="This is a post akdkajdhkjahdjahdjkadjajdaj akdjhajhdjhajkhd adajhdjkhakdhkjahdha akdajhdjhajdhjh adhjkahdjhajhdjahd akdjkajhjkdhajhd akdjjkahdjhajdhakjhd akjdhjahdjhajdhjkahdjh jhadjhajhdkjhadhahjd jahdjhajdhjahdj " />
                </div>
            </div>
        </div>
    )
}