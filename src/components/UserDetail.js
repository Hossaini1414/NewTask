
import { useParams } from "react-router-dom";
const users = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 18 },
    { id: 3, name: "Reza", age: 25 },
];
export default function UserDetail() {
    const { userId } = useParams();
    const user = users.find(u => u.id === parseInt(userId));
    return (
        <div className="max-w-lg mx-auto bg-white shadow p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-4">User Detail</h2>
            <p className="text-lg text-gray-700">
                <div className="grid grid-rows-3 gap-2">
                    <span className="font-bold">
                        Id: {user.id}
                    </span>
                    <span className="font-bold">
                        Name: {user.name}
                    </span>
                    <span className="font-bold">
                        Age: {user.age}
                    </span>
                </div>
            </p>
        </div>
    );
}