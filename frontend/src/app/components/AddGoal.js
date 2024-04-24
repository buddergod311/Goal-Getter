import React from 'react';
import { useState } from 'react'
import Card from './Card';
import Button from './Button';
import './AddGoal.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AddGoal = () => {

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [days, setDays] = useState([false, false, false, false, false, false, false]);

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
      prevDays[0] = event.target.checked;
      return (prevDays);
    })
  };
  const mondayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[1] = event.target.checked;
      return (prevDays);
    })
  };
  const tuesdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[2] = event.target.checked;
      return (prevDays);
    })
  };
  const wednesdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[3] = event.target.checked;
      return (prevDays);
    })
  };
  const thursdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[4] = event.target.checked;
      return (prevDays);
    })
  };
  const fridayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[5] = event.target.checked;
      return (prevDays);
    })
  };
  const saturdayChangeHandler = (event) => {
    setDays((prevDays) => {
      prevDays[6] = event.target.checked;
      return (prevDays);
    })
  };

  const router = useRouter();

  const submitHandler = () => {
    const data = {
      key: Math.random().toString(),
      title: name,
      image: img,
      description: desc,
      sunday: days[0],
      monday: days[1],
      tuesday: days[2],
      wednesday: days[3],
      thursday: days[4],
      friday: days[5],
      saturday: days[6],
    };
    if (name != '') {
      axios
        .post('http://localhost:8082/api/goals', data, {headers:{'auth-token':localStorage.getItem('auth-token')}})
        .then((res) => {
          setName('');
          setImg('');
          setDesc('');
          setDays('');

          router.push('/dashboard');
        })
        .catch((err) => {
          console.log('Error in CreateGoal.');
        });

    } else {
      alert('You must enter a name');
    }
  };
  const cancel = (event) => {
    event.preventDefault();
    router.push('/dashboard');
  }

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
          <div>
            <label>Sunday</label>
            <input
              type="checkbox"
              onChange={sundayChangeHandler}
            />
          </div>
          <div>
            <label>Monday</label>
            <input
              type="checkbox"
              onChange={mondayChangeHandler}
            />
          </div>
          <div>
            <label>Tuesday</label>
            <input
              type="checkbox"
              onChange={tuesdayChangeHandler}
            />
          </div>
          <div>
            <label>Wednesday</label>
            <input
              type="checkbox"
              onChange={wednesdayChangeHandler}
            />
          </div>
          <div>
            <label>Thursday</label>
            <input
              type="checkbox"
              onChange={thursdayChangeHandler}
            />
          </div>
          <div>
            <label>Friday</label>
            <input
              type="checkbox"
              onChange={fridayChangeHandler}
            />
          </div>
          <div>
            <label>Saturday</label>
            <input
              type="checkbox"
              onChange={saturdayChangeHandler}
            />
          </div>
        </div>
        <div className='submitButton'>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <Button onClick={cancel}>Cancel</Button>
    </Card>
  );
};

export default AddGoal;
