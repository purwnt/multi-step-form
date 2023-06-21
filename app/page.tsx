'use client';

import { useState } from 'react';

export default function Form() {
  const [step, setStep] = useState<number>(1);
  const [displayResult, setDisplayResult] = useState<boolean>(false);

  // step 1
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  // step 2
  const [job, setJob] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  // step 3
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // validation

    e.preventDefault();
    setDisplayResult(true);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setJob('');
    setLocation('');
    setMessage('');
    setStep(1);
    setDisplayResult(false);
  };

  return (
    <>
      <div className='max-w-6xl bg-white mx-auto my-10 p-4'>
        <div className='flex justify-between text-center  text-white gap-2'>
          <div className='w-1/3 bg-blue-600'>
            <button onClick={() => setStep(1)} className='py-3 w-full'>
              Step 1
            </button>
          </div>
          <div className='w-1/3 bg-blue-600'>
            <button onClick={() => setStep(2)} className='py-3 w-full'>
              Step 2
            </button>
          </div>
          <div className='w-1/3 bg-blue-600'>
            <button onClick={() => setStep(3)} className='py-3 w-full'>
              Step 3
            </button>
          </div>
        </div>
      </div>
      {step === 1 && (
        <form onSubmit={() => setStep(2)}>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={firstName}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setFirstName(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={lastName}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setLastName(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              className='border border-slate-300 p-2'
              type='email'
              value={email}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={phone}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPhone(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor='address'>Phone</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={address}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setAddress(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <button className='bg-blue-500 px-3 py-2 text-white'>
              Next Step
            </button>
          </div>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={() => setStep(3)}>
          <div>
            <label htmlFor='job'>Job</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={job}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setJob(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <label htmlFor='location'>Location</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={location}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setLocation(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <button className='bg-blue-500 px-3 py-2 text-white'>
              Next Step
            </button>
          </div>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>Message</label>
            <input
              className='border border-slate-300 p-2'
              type='text'
              value={message}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setMessage(e.currentTarget.value)
              }
            />
          </div>
          <div className='flex gap-2 text-white'>
            <button className='bg-blue-500 px-3 py-2'>Submit</button>
            <button onClick={handleReset} className='bg-blue-500 px-3 py-2'>
              Reset
            </button>
          </div>
        </form>
      )}
      {displayResult && (
        <div>
          <p>First Name: {firstName} </p>
          <p>Last Name: {lastName} </p>
          <p>Email: {email} </p>
          <p>Phone: {phone} </p>
          <p>Address: {address} </p>
          <p>Job: {job} </p>
          <p>Location: {location} </p>
          <p>Message: {message} </p>
        </div>
      )}
    </>
  );
}

