"use client";
import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

export default function Courses() {
    const category = useSearchParams().get("category");
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData(`${window.location.origin}/api/courses?category=${category}`);
            setData(result);
        };
        fetchData();
    }, [category]);

    if (!data) return <div>loading...</div>;

    const courses = data.map((course) => (
        <div key={course.id}>
            <h2>{course.title}</h2>
            <Link href={`/courses/${course.id}`}>View Course</Link>
        </div>
    ));

    return (
        <div>
            <h1>Courses</h1>
            {courses}
        </div>
    );
}