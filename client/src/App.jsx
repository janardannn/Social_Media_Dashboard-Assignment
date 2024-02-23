import { useEffect, useState } from "react"
import axios from "axios"

import AddPost from "./Components/AddPost"
import StatsChart from "./Components/Chart"
import Card from "./Components/Card"
import ScheduledPost from "./Components/SPost"
import ScheduledPosts from "./Components/SchedulePosts"
import Posts from "./Components/Posts"

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log(API_BASE_URL)

function App() {

  const [postsData, setPostsData] = useState([]);

  const [totalLikes, setTotalLikes] = useState(0)
  const [totalComments, setTotalComments] = useState(0)
  const [totalShares, setTotalShares] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(API_BASE_URL + "/api/posts/")

      if (data) {
        // console.log(data.data)
        setPostsData(data.data)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (postsData.length > 0) {
      let likes = 0
      let comments = 0
      let shares = 0

      postsData.forEach((post) => {
        likes += post.likes
        comments += post.comments
        shares += post.shares
      })

      setTotalLikes(likes)
      setTotalComments(comments)
      setTotalShares(shares)
    }
  }, [postsData])


  if (postsData.length === 0) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="m-auto">Loading...</p>
      </div>
    )
  }

  else {
    return (
      <>
        <div className="main-container w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-start">

            <div className="lg:mt-12"></div>
            <div className="header m-2">
              <h1 className="text-3xl">Dashboard</h1>
            </div>
            <div className="lg:mb-6"></div>

            <div className="flex">
              <div>
                <div className="body lg:flex">

                  <div className="total-likes-comments-shares flex flex-col">
                    <Card title="Likes" total={totalLikes} />
                    <Card title="Comments" total={totalComments} />
                    <Card title="Shares" total={totalShares} />
                  </div>

                  <StatsChart title="Likes" chartData={postsData} />


                </div>
                <Posts postsData={postsData} />
              </div>

              <ScheduledPosts />
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App
