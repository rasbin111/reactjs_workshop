import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { getPerson } from './getPerson';
import { Reset } from './Reset';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const addButtonRef = useRef<HTMLButtonElement>(null);

  function ExpensiveCalculation() {
    console.log('Executing expensive calcualtion');

    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }

  // without memoization
  // const expensiveValue = ExpensiveCalculation();

  // with memoization, ExpensiveCalcualtion() is called only once even if the
  // component is rendered multiple times
  const expensiveValue = useMemo(ExpensiveCalculation, []);

  const handleReset = useCallback(() => setScore(score - 1), []);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.full_name);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  if (loading) {
    return <div> Loading... </div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <p> {expensiveValue} </p>
      <button ref={addButtonRef} onClick={() => setScore(score + 1)}>
        Add
      </button>

      <button onClick={handleReset}> Subtract </button>
      <Reset
        onClick={() => {
          setScore(0);
        }}
      />
    </div>
  );
}
