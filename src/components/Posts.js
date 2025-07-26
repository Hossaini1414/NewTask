import { useEffect, useState } from "react";
export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0, 10)); // فقط 10 پست اول
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500 mt-10">در حال دریافت اطلاعات...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Latest Posts</h2>
            <div className="grid gap-6">
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}