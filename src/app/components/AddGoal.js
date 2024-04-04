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
  const [days, setDays] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const imgChangeHandler = (event) => {
    setImg(event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const daysChangeHandler = (event) => {
    setDays(event.target.value);
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
        <label>Days</label>
         <input
          value={days}
          type="text"
          onChange={daysChangeHandler}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddGoal;
