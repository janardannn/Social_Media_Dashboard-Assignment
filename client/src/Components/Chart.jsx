import { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"

Chart.defaults.color = "rgb(226 232 240)"
Chart.defaults.borderColor = "rgb(55 65 81)"


function MultiStatsChart({ chartData }) {


    return (
        <Line data={data} />

    )
}

export default function StatsChart({ title, chartData }) {

    const [selectOptions, setSelectOptions] = useState([
        { label: "All", value: "all" },
        { label: "Likes", value: "likes" },
        { label: "Comments", value: "comments" },
        { label: "Shares", value: "shares" }
    ])

    const [current, setCurrent] = useState("all")

    const [selectedOption, setSelectedOption] = useState({})

    useEffect(() => {
        if (current === "likes") {
            setSelectedOption({
                title: "likes",
                color: "rgb(37 99 235)"
            })
        }
        else if (current === "comments") {
            setSelectedOption({
                title: "comments",
                color: "rgb(202 138 4)"
            })
        }
        else if (current === "shares") {
            setSelectedOption({
                title: "shares",
                color: "rgb(22 163 74)"
            })
        }
    }, [current])

    const data = {
        labels: chartData.map(data => data.title),
        datasets: [{
            label: selectedOption.title,
            data: chartData.map(data => data[selectedOption.title]),
            //backgroundColor: "rgb(37 99 235)"
            borderColor: selectedOption.color,
            // data: rawData.map(data => data.value)
        }]
    }

    const multiData = {
        labels: chartData.map(data => data.title),
        datasets: [
            {
                label: "likes",
                data: chartData.map(data => data.likes),
                //backgroundColor: "rgb(37 99 235)"
                borderColor: "rgb(37 99 235)",
                // data: rawData.map(data => data.value)
            },
            {
                label: "comments",
                data: chartData.map(data => data.comments),
                borderColor: "rgb(202 138 4)"
            },
            {
                label: "shares",
                data: chartData.map(data => data.shares),
                borderColor: "rgb(22 163 74)"
            }
        ]
    }

    const handleSelectorChange = (e) => {
        setCurrent(e.target.value)
    }

    // console.log(current)

    return (
        <>
            <div className="selector">
                <select onChange={handleSelectorChange} defaultValue={current} className="text-sm rounded-md p-1 my-4 ">
                    {selectOptions.map((option, index) => {
                        return <option key={index} value={option.value}>{option.label}</option>
                    })}
                </select>
            </div>

            <Line data={current === "all" ? multiData : data} />
        </>
    )
}