import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchEmployeesByUrl,updateCheckBox} from "../redux/features/employeeSlice"

export const Employees = () => {
    const getEmployeesData = useSelector((state) => {
        return state.employees;
    })
    const {
        employeesData
    } = getEmployeesData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployeesByUrl())
    }, [dispatch]);

    const handleCheckBox = (id) => {
        dispatch(updateCheckBox(id))
    }

    const checkBoxSkeleton = (
        employeesData.map((ele) => {
            const {
                id,
                title,
                completed
            } = ele;
            return (
                <li className="list-group-item" key={id}>
                    <div className="form-check">
                        <input 
                            type="checkbox"  
                            className="form-check-input"
                            checked={completed}
                            onChange={() => handleCheckBox(id)}
                        />
                        <label className="form-check-label">
                            {title}
                        </label>
                    </div>
                </li>
            )
        })
    )

    const cardSkeleton = (
        employeesData.map((ele) => {
            const {
                id,
                title,
                completed
            } = ele;
            return (
                <section key={id}>
                    {
                        completed && <div className="card my-2">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Id : {id}
                                    </li>
                                    <li className="list-group-item">
                                        Title : {title}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </section>
            )
        })
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2
                        className="text-primary mt-3"
                    >
                        Employees
                    </h2>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur distinctio ipsam placeat saepe iste?
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-group my-2">
                        {
                            employeesData.length > 0 && checkBoxSkeleton
                        }
                    </ul>
                </div>
                <div className="col-lg-6">
                    {
                        employeesData.length > 0 && cardSkeleton
                    }
                </div>
            </div>
        </div>
    )
}