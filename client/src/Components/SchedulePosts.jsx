import { useState, useEffect } from "react"
import Modal from "react-modal"
import AddPost from "./AddPost"
import ScheduledPost from "./SPost"

function NewPostModal() {
    return (
        <div className="modal-box overlay">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>

    )
}

export default function ScheduledPosts() {
    const [show, setShow] = useState(false)

    const handleModal = () => {
        setShow(!show)
    }

    return (
        <div className="post-schedule">
            <div className="lg:w-[430px] w-[400px] h-fit border-2 rounded-md m-2 p-2">
                <p className="lg:text-xl mb-2">Schedule posts for later</p>
                <div>
                    <AddPost onClick={handleModal} />
                    <Modal
                        isOpen={show}
                        onRequestClose={handleModal}
                        contentLabel="New Post"
                    >
                        <h3>Enter post title</h3>
                        <input type="text" />
                        <h3>Enter post description</h3>
                        <textarea />
                    </Modal>
                    <ScheduledPost title="Post 1 adkjahdjakjdh" description="This is a post akdkajdhkjahdjahdjkadjajdaj akdjhajhdjhajkhd adajhdjkhakdhkjahdha akdajhdjhajdhjh adhjkahdjhajhdjahd akdjkajhjkdhajhd akdjjkahdjhajdhakjhd akjdhjahdjhajdhjkahdjh jhadjhajhdkjhadhahjd jahdjhajdhjahdj " />
                </div>
            </div>
        </div>
    )
}