import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <p className="card-content">{props.content}</p>
            <p className="card-info">{props.name} <b>·</b> {props.clas}</p>
        </div>
    )
}
