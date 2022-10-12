
import {Option, Form, Form8791} from './styles/MenuDe'

const OptionModal = () =>{
    return (
        <>
            <Option>

                <h1 className='text3'>Enter an amount </h1>
                <div className='line'></div>
    <Form >

                <Form8791>
                    <label className="labeldiv">Amount sent</label>
                    <input className='inputdiv'
                    type="number"
                    id="number"
                    name="number"
                    placeholder='N3,500'
                    />
                </Form8791>

                <Form8791>
                    <label className="labeldiv">Amount receive</label>
                    <input className='inputdiv bg'
                    type="number"
                    id="number"
                    name="number"
                    placeholder='N3,500'
                    disabled
                    />
                </Form8791>

                <button className='btn'>Confirm</button>
    </Form>

                

            </Option>
        </>
    )
}


export default OptionModal