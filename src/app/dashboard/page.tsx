"use client"
import {Button} from "@/components/ui/button";
const data = async () => {
    await fetch('http://localhost:3000/api/seeder')
}
export default function Dashboard() {

    const handleClick = () => {
        data().catch(console.error)
    }
    return (
        <>
            <div className="w-full flex justify-center items-center h-full">INI DASHBOARD</div>
            <Button onClick={handleClick}>seed</Button>
        </>
    )
}