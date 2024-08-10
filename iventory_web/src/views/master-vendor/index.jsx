import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

// react-bootstrap
import { Row, Col, Card, Table, Button } from 'react-bootstrap';


const MasterVendor = () => {
    return (
        <React.Fragment>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Header>
                  <Card.Title as="h3">Master Vendor</Card.Title>
                </Card.Header>
                <Card.Body className="p-3">
                  <div className="table-card" style={{ height: '362px' }}>
                    <PerfectScrollbar>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>
                              <span>No</span>
                            </th>
                            <th>
                              <span>Id vendor</span>
                            </th>
                            <th>
                              <span>Nama Vendor</span>
                            </th>
                            <th>
                              <span>Nama Kota</span>
                            </th>
                            <th>
                              <span>Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2024098</td>
                            <td>PT. Tirta Biru Gemilang</td>
                            <td>Sukabumi</td>
                            <td>
                              <Button variant="primary" size="sm" className="me-2">
                                <i className='fa fa-edit' /> Edit
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>2024088</td>
                            <td>PT. Tirta Mineral Jaya</td>
                            <td>Subang</td>
                            <td>
                              <Button variant="primary" size="sm" className="me-2">
                                <i className='fa fa-edit' /> Edit
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </PerfectScrollbar>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </React.Fragment>
      );
}

export default MasterVendor;