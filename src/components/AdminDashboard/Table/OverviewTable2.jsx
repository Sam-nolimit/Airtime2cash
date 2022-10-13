import Table from 'react-bootstrap/Table';
// import DataArray from './MOCK_DATA.json'
import { mainAxios } from '../../Axios/Axios'
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Ellipsis from '../images/ellipsis-solid.svg'
import ModalBS from '../../Utils/ModalBS/ModalBS';
import './OverviewTable.css'




const OverviewTable2 = ({ type }, key) => {

    const pending = 0;
    const success = 1;
    const cancelled = 2;

    let route = "";
    if (type === "all") {
        route = '/transactions?status=All-Transactions'
    } else if (type === "pending") {
        route = '/transactions?status=Pending-Transactions'
    }

    const [transactions, setTransactions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [toConfirm, setToConfirm] = useState({ id: null, amount: 0 });

    const handleShow = async (e) => {
        const id = e.currentTarget.getAttribute("data-edit-id");
        const amount = e.currentTarget.getAttribute("data-edit-amount");

        console.log({ myid: id })
        setToConfirm({ id: id, amount: amount });

        setShowModal(true);
    }

    const handleCancel = async (e) => {
        const id = e.currentTarget.getAttribute("data-cancel-id");
        const res = await mainAxios.patch(`/transactions`, {
            id: id,
            status: cancelled
        });

        getTransactions()
    }


    const getTransactions = async () => {

        const res = await mainAxios.get(route);
        console.log(res.data.transaction);
        setTransactions(res.data.transaction)
    }

    useEffect(() => {
        getTransactions();
    }, [showModal, key])

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

                                <td className='bg-warning'> Pending</td>
                            }
                            {type === "all" && data.status == "1" &&

                                <td className='bg-success text-white'>Successful</td>
                            }
                            {type === "all" && data.status == "2" &&

                                <td className='bg-danger text-white'>Cancelled</td>
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
                                            <Dropdown.Item data-edit-id={data.userId} data-cancel-id={data.id} data-edit-amount={data.amount} onClick={handleShow} className="table-dropdown-item" >
                                                <span >Edit</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={handleCancel} data-cancel-id={data.id} className="table-dropdown-item">
                                                <span>Cancel</span>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </Dropdown>
                                    <ModalBS toConfirm={toConfirm} showModal={showModal} setShowModal={setShowModal} getTransactions={getTransactions} transactionId={data.id }/>
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