import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from 'react';

export default function Contacts() {
    const [count, setCount] = useState(3.14);
    return (
            <MainLayout title={'Contacts'}>
                <h1>{count}</h1>
                <button onClick={() => setCount(count / 0.74555)}>
                    Жми не бойся!
                </button>

                <hr/>
                <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
                    <div className="px-6 py-4">
                        <div className="mb-2 text-xl font-bold">Contact us </div>
                        <form className="flex flex-col">
                            <label htmlFor="name" className="mb-2 italic">Name</label>
                            <input
                                className="mb-4 border-b-2"
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <hr/>

            </MainLayout>
    )
}