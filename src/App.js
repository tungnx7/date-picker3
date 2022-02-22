import './App.css';
import DateInPut from './Components/Date/DateInput';

function App() {
  return (
    <div className="App">
        <header className='date-header'>
          MY DATE PICKER
        </header>
        <section className='date-container'>
          <DateInPut />
        </section>
    </div>
  );
}

export default App;
