import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import SignUp from '@pages/auth/SignUp';
import SignIn from '@pages/auth/SignIn';
import Dashboard from '@pages/sales/Dashboard';
import CompanyInfoForm from '@pages/company/accountProfile';
import CollaboratorsManagement from '@pages/company/CollaboratorsManagement';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/collaborators" element={<CollaboratorsManagement />} />
        <Route path="/profile" element={<CompanyInfoForm />} />
        {/* TODO */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
