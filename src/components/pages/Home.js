import React, {useState} from 'react'

import SimpleMap from './Home/SimpleMap'
import SideBar from './Home/SideBar'

import pinData from '../../pinData'

function Home() {
    const [eventNum,setEventNum] = useState(0)
    return (
        <div>
            <SimpleMap setEventNum={setEventNum} eventNum={eventNum} item={pinData}/>
            <SideBar setEventNum={setEventNum} eventNum={eventNum} item={pinData}/>
        </div>
    )
}

export default Home