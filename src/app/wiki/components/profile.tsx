"use client"

import { ICharacter } from "@/db"
import { useParams } from "next/navigation"

interface ProfileProps {
    character:(name:string) => ICharacter
}


export default function Profile(props:ProfileProps) {
    let data = useParams()
    return(
        <h1>{props.character(String(data)).name}</h1>
    )
}