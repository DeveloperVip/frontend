import React from 'react'
import './UserAddress.css'

const UserAddress = () => {
    const [show, setShow] = React.useState(false)

    const savedaddress = [
        {
            AddressLine1: 'AddressLine1',
            AddressLine2: 'AddressLine2',
            AddressLine3: 'AddressLine3',
        },
        {
            AddressLine1: 'AddressLine5',
            AddressLine2: 'AddressLine6',
            AddressLine3: 'AddressLine7',
        },
        {
            AddressLine1: 'AddressLine8',
            AddressLine2: 'AddressLine9',
            AddressLine3: 'AddressLine10',
        }
    ]
    return (
        <div className='useraddress'>
            {
                !show && <h1 className='mainhead1'>Địa chỉ của bạn</h1>
            }
            {
                !show &&

                <div className='addressin'>
                    {
                        savedaddress.map((item, index) => {
                            return (
                                <div className='address' key={index}>
                                    <span>{item.AddressLine1}</span>,
                                    <span>{item.AddressLine2}</span>,
                                    <span>{item.AddressLine3}</span>


                                    <div className='delbtn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                !show && <div className='addnewbtn'

                    onClick={() => setShow(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>


                </div>
            }
            {
                show &&

                <div className='addnew'>
                    <h1 className='mainhead1'>Thêm địa chỉ mới</h1>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='postalcode'>Mã bưu điện</label>
                            <input type="text" />
                        </div>

{/*                        
                    </div>



                    <div className='form'>
                       */}

                        <div className='form-group'>
                            <label htmlFor='addressline1'>Địa chỉ 1</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline2'>Địa chỉ 2</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline3'>Địa chỉ 3</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button className='mainbutton1'
                        onClick={() => setShow(false)}
                    >Lưu</button>
                </div>
            }
        </div>
    )
}

export default UserAddress