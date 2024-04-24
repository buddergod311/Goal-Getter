import React from 'react';
import Link from 'next/link';
import Button from './Button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const GoalOptions = (props) => {

    const router = useRouter();

    return (
        <div>
            <Link href={'/edit-item/'+props.id}><Button>Goal Options</Button></Link>
        </div>
    );
  
  };
  
  export default GoalOptions;