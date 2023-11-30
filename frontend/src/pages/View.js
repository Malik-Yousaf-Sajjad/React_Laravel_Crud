import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        http.get('/users/' + id + '/edit').then((res) => {
            setInputs({
                name: res.data.name,
                email: res.data.email,
            });
        });
    }
    return (
        <div className="container-xxl mx-auto" style={{ maxWidth: "1000px" }}>
            <h2 className="text-center" style={{ color: "#007BFF" }}>View User</h2>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                                <tr>
                                    <td>{inputs.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                </tr>
                                <tr>
                                    <td>{inputs.email}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}