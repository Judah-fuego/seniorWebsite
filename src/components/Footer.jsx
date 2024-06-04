import {useState, useEffect } from 'react';
import supabase from '@/config/supabaseClient.js';

import {Button} from '../components/ui/button.jsx';
import {AccordionFooter1} from '../components/AccordionOne.jsx';
import {AccordionFooter2} from '../components/AccordionTwo.jsx';
import {AccordionFooter3} from '../components/AccordionThree.jsx';
import { Toaster, toast } from 'sonner'





const Footer = () => {

  const [fetchError, setFetchError] = useState(null)
  const [scores, setScores] = useState([]);

  const[Name, setName] = useState('');
  const[Score, setScore] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleScoreChange = (e) => setScore(e.target.value);

  const scoreSubmit = async () => {
    if (Name.trim().length === 0 || Score.trim().length === 0) {
      toast.error('Failed to fill in the required fields')
      return;
    }

    // Add the score to the database
    const { data, error } = await supabase
      .from('Scores')
      .insert([{ Name, Score }]);
      

    if (error) {
      toast.info('Could not make push to database')
      console.error(error);
    } else {
      toast.success('Successfully Added Score! Reload To See Yours')
      console.log(data);
      setName('');
      setScore('');
      setScores([...scores, ...data]);
      
    }

  };

  useEffect(() => {
    const fetchScores = async () => {
      const { data, error } = await supabase
        .from('Scores')
        .select('*');

      if (error) {
        setFetchError("Could not fetch the scores.");
        setScores([]);
        console.log(error);
      } else {
        setScores(data);
        setFetchError(null);
        console.log('Fetched data:', data);
      }
    };

    fetchScores();
  }, []);
  return (
    <>
    <Toaster position="bottom-right" richColors/>
    <div className='p-5'>
    <div className='bg-slate-100 pb-5 rounded-md'>
    <p className='pb-5 pt-5 pl-5 font-bold text-2xl border-b-2 border-black'>Quiz Time</p>
      <div className='m-auto flex flex-row justify-around p-5'>
        <AccordionFooter1/>
        <AccordionFooter2 />
        <AccordionFooter3 />
      </div>
      <div className='border-blue-950 border-2 w-fit m-auto p-5 flex justify-center gap-x-4 items-center'>
      <p>How many did you get right? <span className='italic'>Reload the page to see your score</span></p>
            <label>Name:</label>
            <input
              type='text'
              className='w-24 h-7'
              value={Name}
              onChange={handleNameChange}
            />
            <label>Score:</label>
            <input
              type="text"
              className='w-24 h-7'
              value={Score}
              onChange={handleScoreChange}
            />
            <Button onClick={scoreSubmit}>Submit</Button>
      </div>
    </div>
    </div>
    {fetchError && (
        <p> Could not fetch score report from supabase <br /> Error: {fetchError}</p>
      )}
      {scores.length > 0 ? (
        <div className='p-10 grid grid-cols-6 gap-4'>
          {scores.map(score => (
            <div key={score.id} className='p-2 bg-orange-500 text-white border-2 border-transparent hover:border-orange-7 00 rounded-md drop-shadow-sm hover:drop-shadow-lg'>
              <p>Name: {score.Name}</p>
              <p>Score: {score.Score}</p>
            </div>
            
          ))}
        </div>
      ) : (
        <p>No scores available</p>
      )}
    
      
    </>
  )
}

export default Footer;