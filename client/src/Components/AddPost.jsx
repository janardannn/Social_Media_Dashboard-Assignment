export default function AddPost({ onClick }) {
    return (
        <button onClick={onClick} className="border-2 p-2 rounded-md my-2 hover:bg-blue-600">➕ Add post</button>
    )
}