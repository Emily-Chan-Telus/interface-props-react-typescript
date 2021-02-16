import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext'
import { Button } from '@material-ui/core';
import { getCustomers, getBrokenCustomers } from '../Services/testApi';
import OverlayAlert from '../Components/OverlayAlert';
import OverlayComponent from '../Components/OverlayComponent';
// import { CustomersInterface } from '../interfaces'
import './Dashboard.css';

const Dashboard = () => {
    // const [customers, setCustomers] = useState<CustomersInterface[]>([]);
    const [state, setState] = useContext(AppContext);
    const { customers, customersError, customersErrorMessage } = state;

    const loadBrokenPeople = async () => {
        const peopleRes = await getBrokenCustomers();
        if (peopleRes instanceof Error) {
            console.log("error: ", peopleRes);
            setState((state: any) => ({ ...state, customersError: true }));
            setState((state: any) => ({ ...state, customersErrorMessage: peopleRes.message }));
        }
        else {
            console.log("success: ", peopleRes);
            setState((state: any) => ({ ...state, customers: peopleRes.results }));
            setState((state: any) => ({ ...state, customersError: false }));
            setState((state: any) => ({ ...state, customersErrorMessage: "" }));
        }
    }

    const loadPeople = async () => {
        const peopleRes = await getCustomers();
        if (peopleRes instanceof Error) {
            console.log("error: ", peopleRes);
            setState((state: any) => ({ ...state, customersError: true }));
            setState((state: any) => ({ ...state, customersErrorMessage: peopleRes.message }));
        }
        else {
            console.log("success: ", peopleRes);
            setState((state: any) => ({ ...state, customers: peopleRes.results }));
            setState((state: any) => ({ ...state, customersError: false }));
            setState((state: any) => ({ ...state, customersErrorMessage: "" }));
        }
    }

    return (
        <div className="dashboard">
            {customersError &&
                <OverlayComponent message={customersErrorMessage || "test"} severity={"success"} />
            }
            <Button onClick={loadBrokenPeople}>Trigger API Error</Button>
            <Button onClick={loadPeople}>Trigger Normal API</Button>
            {/* <Button >API Toast Error</Button>
            <Button>API Landing Page Error</Button>
            <Button>User Dialog Error</Button>
            <Button>User Toast Error</Button> */}
            <div>
                {/* {customersError ? (
                    <div><h1 id='fonts'>error placeholder</h1></div>
                ) : (
                        <div>
                            {customers.map((customer: any, index: any) => (
                                <div> customer states </div>
                            ))}
                        </div>
                    )} */}
            </div>

        </div>
    );
}

export default Dashboard;