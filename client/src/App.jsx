import { useEffect, useState } from "react"
import axios from "axios"

import AddPost from "./Components/AddPost"
import StatsChart from "./Components/Chart"
import Card from "./Components/Card"
import ScheduledPost from "./Components/SPost"
import ScheduledPosts from "./Components/SchedulePosts"
import Posts from "./Components/Posts"

function App() {

  const [postsData, setPostsData] = useState([]);

  const [totalLikes, setTotalLikes] = useState(0)
  const [totalComments, setTotalComments] = useState(0)
  const [totalShares, setTotalShares] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/posts/")

      if (data) {
        console.log(data.data)
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

        <div>

          <div className="lg:mt-12"></div>
          <div className="header lg:w-[1250px] lg:m-auto m-2">
            <h1 className="text-3xl">Dashboard</h1>
          </div>
          <div className="lg:mb-12"></div>

          <div className="body lg:flex lg:justify-center">
            <div className="total-likes-comments-shares flex flex-col">

              <Card title="Likes" total={totalLikes} />
              <Card title="Comments" total={totalComments} />
              <Card title="Shares" total={totalShares} />

              {/* <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">
                Likes
                <div className="mt-8 text-4xl text-blue-600">
                  {totalLikes}
                </div>
              </div>

              <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">
                Comments
                <div className="mt-8 text-4xl text-yellow-600">
                  {totalComments}
                </div>
              </div>

              <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">
                Shares
                <div className="mt-8 text-4xl text-green-700">
                  {totalShares}
                </div>
              </div> */}

            </div>


            <StatsChart title="Likes" chartData={postsData} />

            <ScheduledPosts />


          </div>
          <Posts />

        </div>
      </>
    )
  }
}

export default App
