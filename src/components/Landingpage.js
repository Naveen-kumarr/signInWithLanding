
import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components';
import Table from './Table'
import './Landingpage.css';


const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 10px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
    padding-top: 64px;
`;



export default class extends Component {

    state = {
        selected: 'home',
        expanded: false
    };
    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
  render() {

    
   
          const { expanded, selected } = this.state;
          return (
            <div className="sd-nav">
              <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
                <SideNav.Toggle  />
                <SideNav.Nav selected={selected}>
                  
                     

                <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Home">
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Users">
                            <NavIcon>
                                <i className="fa fa-user" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 , color:'#fff'}} title="Users">
                                Users
                            </NavText>
                        </NavItem>
                        
                        <NavItem eventKey="Logout">
                            <NavIcon>
                                <i className="fa fa-reply" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 , color:'#fff'}} title="Logout">
                                Logout
                            </NavText>
                        </NavItem>
                     
                   
                </SideNav.Nav>
              </SideNav>
              <Main expanded={expanded} >
                <Table/>
               
              </Main>
            </div>
          
   
    );
  }
}