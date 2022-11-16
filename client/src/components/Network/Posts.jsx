import {useQuery} from "@tanstack/react-query";

const URL = "https://jsonplaceholder.typicode.com/posts";

type Post = {
    userId: string;
    id: string;
    title: string;
    body: string;
}

const getPostById = async (id: string): Promise<Post> => {
    const response = await fetch(`${URL}/${id}`);
    return await response.json();
};

export const usePost = (id: string) => useQuery(
    ["post", id],
    () => getPostById(id),
    {
        enabled: !!id,
        staleTime: 10000
    }
);