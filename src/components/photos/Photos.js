import './Photos.scss';
import Photolist from '../photoList/Photolist';
import { useEffect, useState } from 'react';
import photostuff from '../../PhotoData';

const Photos = () => {
    const [selected, setSelected] = useState("bhs"); // Keeps track of which button it is currently on
    const [data, setData] = useState([]); // Image paths

    const [slideNum, setSlideNum] = useState(0); // Keeps track of which slide the slider is on

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideNum(slideNum > 0 ? slideNum - 1 : data.length - 1); // Goes left
        } else {
            setSlideNum(slideNum < data.length - 1 ? slideNum + 1 : 0); // Goes right
        }
    }

    const list = [
        {
            id: "bhs",
            title: "Braemar Hill Sunset"
        },
        {
            id: "cwbs",
            title: "Clear Water Bay Sunrise",
        },
        {
            id: "moss",
            title: "Ma On Shan Sunrise",
        },
        {
            id: "cdas",
            title: "Cape d'Aguilar Sunrise"
        },
        {
            id: "sc",
            title: "Suicide Cliff",
        }
    ]

    useEffect(() => {

        switch(selected) {
            case "bhs": 
                setData(photostuff.bhs);
                break;
            case "cwbs":
                setData(photostuff.cwbs);
                break;
            case "moss":
                setData(photostuff.moss);
                break;
            case "cdas":
                setData(photostuff.cdas);
                break;
            case "sc":
                setData(photostuff.sc);
                break;
            default:
                setData(photostuff.bhs);
        }

    }, [selected])
    
    return (
    
        <div className="photos" id="photos">
            <h1>Photos</h1>
            <p>One of my hobbies is to hike around Hong Kong and take photos of the scenery, take a look at some of the pictures I've captured in the past.</p>
            <ul>
                {list.map((item) => {
                    return <Photolist title={item.title} active={selected === item.id} setSelected = {setSelected} id = {item.id}/>
                })}
            </ul>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <img src={data[slideNum]}/>
                    </div>
                </div>
            </div>
            <img src={require('../../assets/arrow.jpg')} className="arrow left" placeholderStyle={{backgroundColor: 'transparent'}} onClick={() => {handleClick('left')}}></img>
            <img src={require('../../assets/arrow.jpg')} className="arrow right" onClick={()=>{handleClick('right')}}></img>
        </div>
    
    )
}

export default Photos