import React from 'react';
import { useState } from 'react'
import Card from './Card';
import Button from './Button';
import './AddGoal.css';
import { useRouter } from 'next/navigation';

const AddGoal = () => {

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [days, setDays] = useState(['off', 'off', 'off', 'off', 'off', 'off', 'off']);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const imgChangeHandler = (event) => {
    setImg(event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const sundayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[0] = event.target.value;
      return (prevDays);
    })
  };
  const mondayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[1] = event.target.value;
      return (prevDays);
    })
  };
  const tuesdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[2] = event.target.value;
      return (prevDays);
    })
  };
  const wednesdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[3] = event.target.value;
      return (prevDays);
    })
  };
  const thursdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[4] = event.target.value;
      return (prevDays);
    })
  };
  const fridayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[5] = event.target.value;
      return (prevDays);
    })
  };
  const saturdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[6] = event.target.value;
      return (prevDays);
    })
  };

  const router = useRouter();

  const submitHandler = () => {
    const data = {
      key: Math.random().toString(),
      name: name,
      img: img,
      desc: desc,
      days: days
    };
    if (name != '') {
      //Normally setGoal goes here
      console.log(data)
      setName('');
      setImg('');
      setDesc('');
      setDays('');
      router.push('/dashboard');
    } else {
      alert('You must enter a name');
    }
  };

  return (
    <Card className="input">
      <form action={submitHandler}>
        <label>Goal Name</label>
        <input
          value={name}
          type="text"
          onChange={nameChangeHandler}
        />
        <label>Description </label>
        <input
          value={desc}
          type="text"
          onChange={descChangeHandler}
        />
        <label>Link to image</label>
         <input
          value={img}
          type="text"
          onChange={imgChangeHandler}
        />
        <div className='days'>
          <label>Sunday</label>
          <label>Monday</label>
          <label>Tuesday</label>
          <label>Wednesday</label>
          <label>Thursday</label>
          <label>Friday</label>
          <label>Saturday</label>
        </div>
        <div className='buttons'>
          <input
            type="checkbox"
            onChange={sundayChangeHandler}
          />
          <input
            type="checkbox"
            onChange={mondayChangeHandler}
          />
          <input
            type="checkbox"
            onChange={tuesdayChangeHandler}
          />
          <input
            type="checkbox"
            onChange={wednesdayChangeHandler}
          />
          <input
            type="checkbox"
            onChange={thursdayChangeHandler}
          />
          <input
            type="checkbox"
            onChange={fridayChangeHandler}
          />
          <input
            type="checkbox"
            onChange={saturdayChangeHandler}
          />
        </div>
        <div className='submitButton'>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddGoal;
