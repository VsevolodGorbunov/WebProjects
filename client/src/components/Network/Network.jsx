import React, {FormEvent, useState} from "react";
import styles from "./Network.module.css";
import {useQuery} from "@tanstack/react-query";

type Post = {
    userId: string;
    id: string;
    title: string;
    body: string;
} | undefined;

const URL = "https://jsonplaceholder.typicode.com/posts";
const URLuser = "https://jsonplaceholder.typicode.com/users";

const getPostById = async (id: string): Promise<Post> => {
    const request = await fetch(`${URLuser}/${id}`);
    if (request.status !== 200) {
        throw Error(request.statusText);
    }
    return await request.json();
};

function usePost(postId: string) {
    return useQuery(
        ["post", postId],
        () => getPostById(postId),
        {
            enabled: !!postId,
            staleTime: 10000
        }
    );
}

export default function FetcherQuery() {
    const [id, setId] = useState("");
    const [input, setInput] = useState("");

    const {data, error, isFetching} = usePost(id);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setId(input);
    };

    return <form onSubmit={handleSubmit}>
        <label>
            ID:
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <br/>
        </label>
        <button type="submit">Получить данные!</button>
        {isFetching ? (
            "Loading..."
        ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
        ) : (
            <>
                <h1>{data?.title}</h1>
                <div>
                    <p>{data?.body}</p>
                </div>
                <h1>{data?.name}</h1>
                <div>
                    <p>{data?.email}</p>
                </div>
                <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
        )}
    </form>;
}