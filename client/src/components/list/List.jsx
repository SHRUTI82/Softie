import "./list.scss"
import React, { useRef, useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ListItem from "../listitem/Listitem"

export default function List({ list }) {

  const [clicknum, setclicknum] = useState(0);
  const [showarrow, setshowarrow] = useState(false);

  const myref = useRef();

  const handleClick = (dir) => {
    setshowarrow(true)

    if (dir === "numleft" && clicknum > 0) {
      setclicknum(clicknum - 1);
      let leftSpace = myref.current.getBoundingClientRect().x - 40
      myref.current.style.transform = `translateX(${330 + leftSpace}px)`
    }

    if (dir === "numright" && clicknum < 3) {
      setclicknum(clicknum + 1)
      let rightSpace = myref.current.getBoundingClientRect().x - 40
      myref.current.style.transform = `translateX(${-330 + rightSpace}px)`

    }
  };

  return (
    <div className="list">
      <span className="nameList">{list.title}</span>
      <div className="onelist">
        <ArrowLeftIcon className="arrow left"
          onClick={() => handleClick("numleft")}
          style={{ display: !showarrow && "none" }}
        />

        <div className="onelistContainer" ref={myref}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
          
{/* 
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} /> */}
          <ListItem index={7} />

        </div>

        <ArrowRightIcon
          className="arrow right"
          onClick={() => handleClick("numright")}
        />
      </div>
    </div>
  );
} 
