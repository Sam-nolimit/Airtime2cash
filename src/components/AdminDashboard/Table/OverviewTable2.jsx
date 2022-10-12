import Table from 'react-bootstrap/Table';
// import DataArray from './MOCK_DATA.json'
import { mainAxios } from '../../Axios/Axios'
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Ellipsis from '../images/ellipsis-solid.svg'
import ModalBS from '../../Utils/ModalBS/ModalBS';
import './OverviewTable.css'




const OverviewTable2 = ({ type }) => {

    const [transactions, setTransactions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true);
    }


    const getTransactions = async () => {
        let route = "";
        if (type === "all") {
            route = '/transactions?status=All-Transactions'
        } else if (type === "pending") {
            route = '/transactions?status=Pending-Transactions'
        }
        const res = await mainAxios.get(route);
        console.log(res.data.transaction);
        setTransactions(res.data.transaction)
    }

    useEffect(() => {
        getTransactions();
    }, [showModal])

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Amount Sent</th>
                    <th>Amount to Receive</th>
                    <th>Network</th>
                    {type === "all" &&
                        <th>Status</th>
                    }
                    {type === "pending" &&
                        <th>Action</th>
                    }
                </tr>
            </thead>
            <tbody>


                {

                    transactions.map((data, index) => (

                        <tr key={index}>
                            <td>{data.user.email}</td>
                            <td>{data.phoneNumber}</td>
                            <td>N{Number((data.amount / 0.7).toFixed(2)).toLocaleString()}</td>
                            <td>N{data.amount.toLocaleString()}</td>
                            <td>{data.network}</td>
                            {type === "all" && data.status == "0" &&

                                <td>Pending</td>
                            }
                            {type === "all" && data.status == "1" &&

                                <td>Successful</td>
                            }
                            {type === "pending" &&
                                <td>{data.action}
                                    <Dropdown className="d-inline">

                                        <DropdownButton
                                            variant="link"
                                            title={<img src={Ellipsis} alt="" />}
                                            className="table-dropdown"
                                            align={{ md: 'end' }}

                                        >
                                            <Dropdown.Item onClick={handleShow} className="table-dropdown-item" >
                                                <span >Edit</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="table-dropdown-item" href="#/">
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </Dropdown>
                                    <ModalBS amountSent={Number((data.amount / 0.7).toFixed(2)).toLocaleString()} amountToReceive={data.amount.toLocaleString()} showModal={showModal} setShowModal={setShowModal} />
                                </td>
                            }

                        </tr>
                    ))
                }


            </tbody>
        </Table>
    );
}

export default OverviewTable2;