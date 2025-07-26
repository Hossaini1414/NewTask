import { Link } from "react-router-dom";

const users = [
    { id: 1, name: "Ali", },
    { id: 2, name: "Sara", },
    { id: 3, name: "Reza", },
];

export default function Users() {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Users List</h2>
            <ul className="space-y-3">
                {users.map(user => (
                    <li key={user.id}>
                        <Link
                            to={`/users/${user.id}`}
                            className="block px-4 py-2 bg-blue-50 text-blue-700 text-xl rounded-xl hover:bg-blue-100"
                        >
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
