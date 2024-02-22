export default function Post({ title, description, likes, comments, shares }) {
    return (
        <div className="flex">
            <div className="truncate pl-2 py-2 round border-r-2 border-b-2 w-[160px]">{title}</div>
            <div className="truncate pl-2 py-2 round border-r-2 border-b-2 w-[358px]">{description}</div>
            <div className="truncate pl-2 py-2 round border-r-2 border-b-2 w-[100px]">{likes}</div>
            <div className="truncate pl-2 py-2 round border-r-2 border-b-2 w-[100px]">{comments}</div>
            <div className="truncate pl-2 py-2 round border-b-2 w-[100px]">{shares}</div>
        </div>
    )
}