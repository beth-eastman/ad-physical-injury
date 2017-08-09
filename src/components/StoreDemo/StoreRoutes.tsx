
import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import HomePage from "./HomePage";
import {AppPageInterface} from '../Main';
import LeftMenuIcon from './LeftMenuIcon'
import {routePageWithProps,menuItem,leftIconProps} from '../AppHOC';
import ProductDetails from '../../containers/StoreDemo/ProductDetails';
import ProductsList from '../../containers/StoreDemo/ProductsList';
import DefaultTabs from '../DefaultTabs';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string}
}

class StoreRoutes extends React.Component<Props, {}>{

  render(){
    const basePath = '/store';
    const defaultProps = {...this.props, ...leftIconProps(basePath),basePath: basePath, tab: '/store',defaultTabs: DefaultTabs};

    const leftMenuIcon = menuItem(LeftMenuIcon,basePath);
    const defaultProductsProps = {...defaultProps, tab: basePath + '/products'};
    return <div>
                <Route exact path={basePath} render={routePageWithProps(HomePage, {...defaultProps,leftIcon: leftMenuIcon}, "Demo Home")} />
                <Route exact path={basePath + '/products'} render={routePageWithProps(ProductsList, defaultProductsProps,"Products")} />
                <Route exact path={basePath + '/products/:id'} render={routePageWithProps(ProductDetails, {...defaultProductsProps,/* //TODO */ ...leftIconProps(basePath + '/products'),tabs:[]},"Details")} />
           </div>;
 
  }
}

export default withRouter(StoreRoutes);
