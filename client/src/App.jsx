import AddPost from "./Components/AddPost"
// import Card from "./Components/Cards"

function App() {

  return (
    <>

      <div>

        <div className="lg:mt-12"></div>
        <div className="header lg:w-[1200px] lg:m-auto m-2">
          <h1 className="text-3xl">Dashboard</h1>
        </div>
        <div className="lg:mb-12"></div>

        <div className="body lg:flex lg:justify-center">
          <div className="total-likes-comments-shares flex flex-col">
            <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">Likes</div>
            <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">Comments</div>
            <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">Shares</div>
          </div>
          <div className="chart lg:text-xl">
            <div className="w-[600px] h-[468px] border-2 rounded-md m-2 p-2">
              Chart
            </div>
          </div>
          <div className="post-schedule">
            <div className="w-[430px] h-fit border-2 rounded-md m-2 p-2">
              <p className="lg:text-xl mb-2">Schedule posts for later</p>
              <div>
                <AddPost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
