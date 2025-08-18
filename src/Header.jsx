import React from "react"
import fortag from "./Header.css"
export default function Header (props) {
  console.log(props.email)
  return (
    <div className="Head" >
      <h1>welcome to jsx {props.email}</h1>
    </div>
  )
}
