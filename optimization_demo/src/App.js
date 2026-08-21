import React from 'react';

function App(){
    const [selectedNum, setSelectedNum] = React.useState(100);

    const time = useTime();

    const allPrimes = React.useMemo(() => {
	const primes = [];
	for(let counter = 2; counter < selectedNum; counter++){
	    if (isPrime(counter)){
		primes.push(counter);
	    }
	}
	return primes
    }, [selectedNum])
    
    return (
	<div>
	    <p>
		{time.toString()}
	    </p>
	    <form>
		<label htmlFor="num"> Your number: </label>
		<input
		    type="number"
		    value={selectedNum}
		    onChange={(event) => {
			let num = Math.min(100_000, Number(event.target.value));
			setSelectedNum(num);
		    }}
		/>
	    </form>
	    <p>
		There are {allPrimes && allPrimes.length} prime(s) between 1 and {selectedNum}: {" "}
		<span>
		    {allPrimes && allPrimes.join(", ")}
		</span>
	    </p>
    </div>
  );
}

function useTime() {
    const [time, setTime] = React.useState(new Date());
    React.useEffect(() => {
	const intervalId = window.setInterval(() => {
	    setTime(new Date());
	}, 1000);
	return () => {
	    window.clearInterval(intervalId);
	}
    }, []);
    return time;
}

function isPrime(n){
  const max = Math.ceil(Math.sqrt(n));
  
  if (n === 2) {
    return true;
  }
  
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}


export default App;
