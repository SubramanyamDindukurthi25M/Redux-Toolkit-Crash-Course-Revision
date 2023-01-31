import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import {fetchUsersByUrl} from '../redux/features/usersSlice'
import { Loader } from "../Components/Loader"

export const Users = () => {
    const getusersData = useSelector((state) => {
        return state.users;
    })
    const{usersData,isBoolean,errorMessage} = getusersData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersByUrl())
    },[dispatch]);

    const tableSkeleton = (
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        Name 
                    </th>
                    <th scope="col">
                        City 
                    </th>
                    <th scope="col">
                        Email 
                    </th>
                    <th scope="col">
                        Website
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    usersData.map((ele) => {
                        const {
                            id,
                            name,
                            address,
                            email,
                            website
                        } = ele;
                        return (
                            <tr key={id}>
                                <td>
                                    {id}
                                </td>
                                <td>
                                    {name}
                                </td>
                                <td>
                                    {address.city}
                                </td>
                                <td>
                                    {email}
                                </td>
                                <td>
                                    {website}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
    return (
        <>
            {
                isBoolean && <Loader/>
            }

            {
                (!isBoolean && errorMessage) && <h2 className="text-danger">{errorMessage}</h2>
            }
            {
                (!isBoolean && usersData.length > 0) && tableSkeleton
            }
        </>       
    )
}