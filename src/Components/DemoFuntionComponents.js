import React from 'react'


//React funtion Component (Thẻ <DemofuntionComponent></DemofuntionComponent>)
export default function DemoFuntionComponents() {
    return ( //Noi dung the chua trong lenh return, lưu ý: nội dung phải được bao bọc bởi 1 thẻ 
        <div className="container bg-dark text-white">
            <div className="display-4 p-5">
                Component
            </div>
            <div className="p-2 pl-5">
                Noi dung Component 
            </div>
        </div>
    )
}
