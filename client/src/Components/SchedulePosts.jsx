import { useState, useEffect } from "react"
import axios from "axios"

import { API_BASE_URL } from "../App"
import AddPost from "./AddPost"
import ScheduledPost from "./SPost"
import NewPostBox from "./NewPostBox"


export default function ScheduledPosts() {

    const [scheduledPostsData, setScheduledPostsData] = useState([]);
    const [postsCount, setPostsCount] = useState();

    const [save, setSave] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_BASE_URL + "/api/scheduledposts/")

            if (data) {
                // console.log(data.data)
                setScheduledPostsData(data.data)
            }
        }
        fetchData()
    }, [save])

    useEffect(() => {
        if (scheduledPostsData.length > 0) {
            setPostsCount(scheduledPostsData.length)
        }
    }, [scheduledPostsData])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_BASE_URL + "/api/scheduledposts/")

            if (data) {
                // console.log(data.data)
                setScheduledPostsData(data.data)
            }
        }
        fetchData()
    }, [postsCount])

    const [editStatus, setEditStatus] = useState(false)

    const [newPostData, setNewPostData] = useState({
        title: "",
        description: ""
    })

    // console.log(newPostData)

    const handleEdit = () => {
        setEditStatus(!editStatus)
    }

    if (scheduledPostsData.length === 0) {
        return (
            <div>loading...</div>
        )
    }
    else {
        return (
            <div className="post-schedule">
                <div className="lg:w-[430px] w-[400px] h-fit border-2 rounded-md m-2 p-2">
                    <p className="lg:text-xl mb-2">Schedule posts for later</p>
                    <div>
                        <AddPost onClick={handleEdit} />
                        {editStatus && <NewPostBox newPost={newPostData} setNewPost={setNewPostData} handleEdit={setEditStatus} deletePost={false} setSaveStatus={setSave} />}
                        {
                            scheduledPostsData.toReversed().map((post, index) => {
                                return <ScheduledPost key={post.id} id={post.id} title={post.title} description={post.description} handleDelete={setPostsCount} save={setSave} />
                            })
                        }
                        {/* <ScheduledPost title="Post 1 adkjahdjakjdh" description="This is a post akdkajdhkjahdjahdjkadjajdaj akdjhajhdjhajkhd adajhdjkhakdhkjahdha akdajhdjhajdhjh adhjkahdjhajhdjahd akdjkajhjkdhajhd akdjjkahdjhajdhakjhd akjdhjahdjhajdhjkahdjh jhadjhajhdkjhadhahjd jahdjhajdhjahdj " /> */}
                    </div>
                </div>
            </div>
        )
    }
}