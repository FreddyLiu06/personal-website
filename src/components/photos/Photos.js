import './Photos.scss';
import Photolist from '../photoList/Photolist';
import { useEffect, useState } from 'react';
import photostuff from '../../PhotoData';

const Photos = () => {
    console.log(photostuff)
    const [selected, setSelected] = useState("bhs");
    const [data, setData] = useState([])

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
                        
                    </div>
                </div>
            </div>
            <img src={require('../../assets/arrow.jpg')} className="arrow left" placeholderStyle={{backgroundColor: 'transparent'}}></img>
            <img src={require('../../assets/arrow.jpg')} className="arrow right"></img>
        </div>
    
    )
}

export default Photos