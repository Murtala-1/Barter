import React from 'react'
import { Menu, Button } from 'antd';
import {Col, Row,  } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom';
const { SubMenu } = Menu;


 class SecondNav extends React.Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        return (
            <Row>
                <Col md={10}>


                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                  <Menu.Item>
                  <Link to="/product">Product </Link>  
                  </Menu.Item>
                  <SubMenu title="Showcase">
                    <Menu.ItemGroup>
                      <Menu.Item key="setting:1">Agriculture</Menu.Item>
                      <Menu.Item key="setting:2">Livestock</Menu.Item>
                      <Menu.Item key="setting:3">Cruel Oil</Menu.Item>
                      <Menu.Item key="setting:4">Metals</Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="contact">
                   Contact
                  </Menu.Item>
                  <Menu.Item key="about">
                   About
                  </Menu.Item>
                </Menu>
               
                </Col>
            </Row>
        );
      }
    }
    
    export default withRouter(SecondNav)