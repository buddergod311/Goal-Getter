import React from 'react';
import { useState, useEffect } from 'react'
import Card from './Card';
import Button from './Button';
import './EditGoal.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const EditGoal = (props) => {

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [days, setDays] = useState([false, false, false, false, false, false, false]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    let url = 'http://localhost:8082/api/goals/' + props.id;
    axios
      .get(url, {headers:{'auth-token':localStorage.getItem('auth-token')}})
      .then((res) => {
        setName(res.data.title);
        setImg(res.data.image);
        setDesc(res.data.description);
        setDays([res.data.sunday, res.data.monday, res.data.tuesday, res.data.wednesday, res.data.thursday, res.data.friday, res.data.saturday]);
        setLoading(false);
     })
     .catch((err) => {
       console.log(err);
     });
  }, []);

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
      key: props.id,
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
      let url = 'http://localhost:8082/api/goals/' + props.id;
      axios
        .put(url, data, {headers:{'auth-token':localStorage.getItem('auth-token')}})
        .then((res) => {
          setName('');
          setImg('');
          setDesc('');
          setDays('');

          router.push('/dashboard');
        })
        .catch((err) => {
          console.log('Error in EditGoal.');
        });

    } else {
      alert('You must enter a name');
    }
  };

  const deleteGoal = () => {
    let url = 'http://localhost:8082/api/goals/' + props.id;
    axios
      .delete(url, {headers:{'auth-token':localStorage.getItem('auth-token')}})
      .then((res) => {
        setName('');
        setImg('');
        setDesc('');
        setDays('');

        router.push('/dashboard');
      })
      .catch((err) => {
        console.log('Error in DeleteGoal.');
      });
  }

  if (loading) {
    return <div></div>;
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
              defaultChecked={days[0]}
              type="checkbox"
              onChange={sundayChangeHandler}
            />
          </div>
          <div>
            <label>Monday</label>
            <input
              defaultChecked={days[1]}
              type="checkbox"
              onChange={mondayChangeHandler}
            />
          </div>
          <div>
            <label>Tuesday</label>
            <input
              defaultChecked={days[2]}
              type="checkbox"
              onChange={tuesdayChangeHandler}
            />
          </div>
          <div>
            <label>Wednesday</label>
            <input
              defaultChecked={days[3]}
              type="checkbox"
              onChange={wednesdayChangeHandler}
            />
          </div>
          <div>
            <label>Thursday</label>
            <input
              defaultChecked={days[4]}
              type="checkbox"
              onChange={thursdayChangeHandler}
            />
          </div>
          <div>
            <label>Friday</label>
            <input
              defaultChecked={days[5]}
              type="checkbox"
              onChange={fridayChangeHandler}
            />
          </div>
          <div>
            <label>Saturday</label>
            <input
              defaultChecked={days[6]}
              type="checkbox"
              onChange={saturdayChangeHandler}
            />
          </div>
        </div>
        <div className='submitButton'>
          <button className='submitChanges' type="submit">Save Changes</button>
        </div>
      </form>
      <div className='submitButton'>
          <button className='deleteGoal' onClick={deleteGoal}>Delete</button>
        </div>
    </Card>
  );
};

export default EditGoal;
