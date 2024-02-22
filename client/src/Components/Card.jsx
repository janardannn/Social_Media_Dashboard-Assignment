import { useState, useEffect } from "react"
import axios from "axios"


export default function Card({ title, total }) {
    // round off to 2 decimal places
    if (total > 1000) {
        total = (total / 1000).toFixed(2) + "K"
    }
    else if (total > 1000000) {
        total = (total / 1000000).toFixed(2) + "M"
    }

    let text_icon_color = {}
    if (title === "Likes") {
        text_icon_color = {
            text: "Likes",
            icon: "👍",
            color: "text-blue-600"
        }
    }
    else if (title === "Comments") {
        text_icon_color = {
            text: "Comments",
            icon: "💬",
            color: "text-yellow-600"
        }
    }
    else if (title === "Shares") {
        text_icon_color = {
            text: "Shares",
            icon: "📤",
            color: "text-green-600"
        }
    }

    return (
        <div className="w-[200px] h-[145px] border-2 rounded-md m-2 p-2 lg:text-xl">
            {text_icon_color.icon + "\t" + text_icon_color.text}
            <div className={"mt-8 ml-4 text-4xl truncate " + text_icon_color.color}>
                {total}
            </div>
        </div>
    )
}