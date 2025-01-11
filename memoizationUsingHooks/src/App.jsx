import { useCallback, useEffect, useState} from 'react'


function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Default password length
  // const [useUpperCase, setUseUpperCase] = useState(false);
  // const [useLowerCase, setUseLowerCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  const generatePassword = useCallback(() => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    characters += upperCaseChars + lowerCaseChars;
    if (useNumbers) characters += numberChars;
    if (useSymbols) characters += symbolChars;

    
      let randomPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
      }

      setPassword(randomPassword); // Set the generated password to state
      console.log(randomPassword);
      
    }, [length, useNumbers, useSymbols])

  const handleLengthChange = (e) => setLength(Number(e.target.value));

  useEffect(() => generatePassword(), [length, useNumbers, useSymbols])

  return (
    <div>
      <h2>Random Password Generator</h2>
      <br />
      <div>
        <label>
          Password Length:
          <input 
            type="number" 
            value={length} 
            onChange={handleLengthChange} 
            min="6" 
            max="50"
          />
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={useNumbers} 
            onChange={() => setUseNumbers(!useNumbers)} 
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={useSymbols} 
            onChange={() => setUseSymbols(!useSymbols)} 
          />
          Include Symbols
        </label>
      </div>
      <div>
        <button onClick={generatePassword}>Generate Password</button>
      </div>
      <br />
        <div>
          <h3>Generated Password:</h3>
          <input type="text" value={password} readOnly />
          <button 
            onClick={() => navigator.clipboard.writeText(password)} 
            style={{ marginLeft: '10px' }}
          >
            Copy
          </button>
        </div>
    </div>
  );
}

export default App