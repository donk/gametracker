import React, {useEffect} from "react";
import styled from "styled-components";

const FilterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  select {
    margin: 0 10px;
    display: block;
  }

  .platforms {
    display: flex;

    div {
      padding: 4px 10px;
      margin: 0 5px;
      border-radius: 5px;
      border: rgba(255, 255, 255, 0.2) 1px solid;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

      &.selected{
        background-color:#CC5500;
      }
    }
  }
`;

const FilterPanel = (props) => {

  useEffect(() => {
    document.querySelector('.allplats').classList.remove('selected');
    document.querySelectorAll('.platforms div').forEach((ele) => {
      const platformValue = ele.getAttribute('value');
      if (props.platforms.indexOf(platformValue) >= 0){
        ele.classList.add('selected');
      }
    });
  },[props.platforms])


  const changeCount = (event) => {
    const newCount = event.target.value;
    props.changeCount(newCount);
  };

  const togglePlatform = (event) => {
    event.target.parentElement.querySelector('.allplats').classList.remove('selected');
    if (event.target.getAttribute('value') === ""){
      event.target.parentElement.querySelectorAll('div').forEach((child) =>{
        child.classList.remove('selected');
      })
    }
    event.target.classList.toggle("selected");
    const children = event.target.parentElement.querySelectorAll(
      "div.selected"
    );
    const selectedPlatforms = [];
    children.forEach((child) => {
      selectedPlatforms.push(child.getAttribute("value"));
    });
    props.changePlatforms(selectedPlatforms);
  };

  return (
    <FilterContent>
      <select onChange={changeCount} value={props.count}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
      <div className="platforms">
        <div value="" className="allplats" onClick={togglePlatform}>
          All
        </div>
        <div value="win" onClick={togglePlatform}>
          PC
        </div>
        <div value="mac" onClick={togglePlatform}>
          Mac
        </div>
        <div value="linux" onClick={togglePlatform}>
          Linux
        </div>
        <div value="switch" onClick={togglePlatform}>
          Switch
        </div>
        <div value="ps4--1" onClick={togglePlatform}>
          PS4
        </div>
        <div value="xboxone" onClick={togglePlatform}>
          Xbox One
        </div>
        <div value="ps3" onClick={togglePlatform}>
          PS3
        </div>
        <div value="xbox360" onClick={togglePlatform}>
          Xbox 360
        </div>
        <div value="dc" onClick={togglePlatform}>
          Dreamcast
        </div>
      </div>
    </FilterContent>
  );
};

export default FilterPanel;
