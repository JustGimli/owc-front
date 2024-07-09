import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/HeaderItem';
import { MainRoots } from './utils/path';
import Footer from './components/Footer/Footer';
import { when } from 'mobx';
import { user } from '.';

const App = () => {
  when(
    () => !user.ip.length,
    () => {
      user.fetchIp();
    }
  );


  const renderRoutes = () => {
    return MainRoots.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
    ));
};
  return (
    <div className="app">
        <Header />
        <Routes>
            {renderRoutes()}
            <Route path="/error" element={<></>} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
