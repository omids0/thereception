import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import MainDashboard from '../components/MainDashboard'
import NewTurn from '../components/NewTurn'
import VirayeshNobatMain from '../components/VirayeshNobatMain'
import VirayeshNobat from '../components/VirayeshNobat'
import ContactUs from '../components/ContactUs'
import PageNotFound from '../components/PageNotFound'


const Header = () => (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link to="/" className='header__title'>
            <h1>The Reception</h1>
          </Link>
        </div>
      </div>
    </header>
  )
  
  const AppRoutes = () => (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={MainDashboard} exact={true} />
        <Route path="/new" component={NewTurn} />
        <Route path="/virayesh-nobat/" component={VirayeshNobatMain} exact={true} />
        <Route path="/virayesh-nobat/:id" component={VirayeshNobat} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )

  export default AppRoutes