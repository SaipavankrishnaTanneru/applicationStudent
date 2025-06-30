import './App.css';
import Header from './main_Components/Header';
import Sidebar from './main_Components/sidebar';
import MainScreen from './Application/mainscreen';

function App() {
  return (
    <div id="App" className='container-fluid px-0'>
      {/* Header */}
      <header style={{ height: '8vh' }} className='bg-warning'>
        <Header />
      </header>

      {/* Body */}
      <div id='App-Body' className='d-flex w-100' style={{ height: '92vh' }}>
        {/* Sidebar */}
        <aside style={{ width: "15%", height: '100%' }} className='bg-dark'>
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main style={{ width: "85%", height: '100%' }} className='d-flex'>
          <div className='ApplicationScreen w-100'>
            <MainScreen />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
