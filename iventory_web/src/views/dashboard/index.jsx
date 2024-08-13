import React from 'react';

// react-bootstrap
import { Row, Col, Card, Table, ListGroup } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';

// project import
import OrderCard from '../../components/Widgets/Statistic/OrderCard';
import SocialCard from '../../components/Widgets/Statistic/SocialCard';

import uniqueVisitorChart from './chart/analytics-unique-visitor-chart';
import customerChart from './chart/analytics-cuatomer-chart';
import customerChart1 from './chart/analytics-cuatomer-chart-1';

// assets
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import imgGrid1 from '../../assets/images/gallery-grid/img-grd-gal-1.jpg';
import imgGrid2 from '../../assets/images/gallery-grid/img-grd-gal-2.jpg';
import imgGrid3 from '../../assets/images/gallery-grid/img-grd-gal-3.jpg';

// ==============================|| DASHBOARD ANALYTICS ||============================== //

const DashAnalytics = () => {
  return (
    <React.Fragment>
      <Row>
        {/* order cards */}
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Stock Barang',
              class: 'bg-c-blue',
              icon: 'feather icon-shopping-cart',
              primaryText: '486',
              secondaryText: 'Jumlah Stock Tersedia',
              extraText: '321'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Barang Keluar',
              class: 'bg-c-green',
              icon: 'feather icon-tag',
              primaryText: '100',
              secondaryText: 'Barang Keluar Saat Ini',
              extraText: '213'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'JUmlah Pengguna',
              class: 'bg-c-yellow',
              icon: 'feather icon-repeat',
              primaryText: '5',
              secondaryText: 'Pengguna Tersedia',
              extraText: '5'
            }}
          />
        </Col>
        {/* <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Profit',
              class: 'bg-c-red',
              icon: 'feather icon-award',
              primaryText: '$9,562',
              secondaryText: 'This Month',
              extraText: '$542'
            }}
          />
        </Col> */}
{/* 
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h5>Unique Visitor</h5>
            </Card.Header>
            <Card.Body className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Row>
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Customers</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0">826</h2>
                      <span className="text-c-green">
                        8.2%
                        <i className="feather icon-trending-up ms-1" />
                      </span>
                    </Col>
                  </Row>
                  <Chart {...customerChart} />
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        674
                      </h3>
                      <span className="ms-3">New</span>
                    </Col>
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle text-primary f-10 mx-2" />
                        182
                      </h3>
                      <span className="ms-3">Return</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="bg-primary text-white">
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Customers</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0 text-white">826</h2>
                      <span className="text-white">
                        8.2%
                        <i className="feather icon-trending-up ms-1" />
                      </span>
                    </Col>
                  </Row>
                  <Chart {...customerChart1} />
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        674
                      </h3>
                      <span className="ms-3">New</span>
                    </Col>
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-white" />
                        182
                      </h3>
                      <span className="ms-3">Return</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={4} md={12}>
          <SocialCard
            params={{
              icon: 'fa fa-envelope-open',
              class: 'blue',
              variant: 'primary',
              primaryTitle: '8.62k',
              primaryText: 'Subscribers',
              secondaryText: 'Your main list is growing',
              label: 'Manage List'
            }}
          />
          <SocialCard
            params={{
              icon: 'fab fa-twitter',
              class: 'green',
              variant: 'success',
              primaryTitle: '+40',
              primaryText: 'Followers',
              secondaryText: 'Your main list is growing',
              label: 'Check them out'
            }}
          />
        </Col>
        <Col lg={8} md={12}>
          <Card>
            <Card.Header>
              <h5>Activity Feed</h5>
            </Card.Header>
            <Card.Body className="card-body pt-4">
              <ListGroup as="ul" bsPrefix=" " className="feed-blog ps-0">
                <ListGroup.Item as="li" bsPrefix=" " className="active-feed">
                  <div className="feed-user-img">
                    <img src={avatar1} className="img-radius " alt="User-Profile" />
                  </div>
                  <h6>
                    <span className="badge bg-danger">File</span> Eddie uploaded new files:{' '}
                    <small className="text-muted">2 hours ago</small>
                  </h6>
                  <p className="m-b-15 m-t-15">
                    hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                  <Row>
                    <Col sm="auto" className="text-center">
                      <img src={imgGrid1} alt="img" className="img-fluid wid-100" />
                      <h6 className="m-t-15 m-b-0">Old Scooter</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-100KB</small>
                      </p>
                    </Col>
                    <Col sm="auto" className="text-center">
                      <img src={imgGrid2} alt="img" className="img-fluid wid-100" />
                      <h6 className="m-t-15 m-b-0">Wall Art</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-150KB</small>
                      </p>
                    </Col>
                    <Col sm="auto" className="text-center">
                      <img src={imgGrid3} alt="img" className="img-fluid wid-100" />
                      <h6 className="m-t-15 m-b-0">Microphone</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-150KB</small>
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" " className="diactive-feed">
                  <div className="feed-user-img">
                    <img src={avatar1} className="img-radius" alt="User-Profile" />
                  </div>
                  <h6>
                    <span className="badge bg-success">Task</span> Sarah marked the Pending Review:{' '}
                    <span className="text-c-green"> Trash Can Icon Design</span>
                    <small className="text-muted"> 2 hours ago</small>
                  </h6>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" " className="diactive-feed">
                  <div className="feed-user-img">
                    <img src={avatar1} className="img-radius" alt="User-Profile" />
                  </div>
                  <h6>
                    <span className="badge bg-primary">comment</span> abc posted a task:{' '}
                    <span className="text-c-green">Design a new Homepage</span> <small className="text-muted">6 hours ago</small>
                  </h6>
                  <p className="m-b-15 m-t-15">
                    hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col> */}

        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Monitor Stock Tersedia</Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <div className="table-card" style={{ height: '362px' }}>
                <PerfectScrollbar>
                  <Table responsive>
                    <thead>
                      <tr>
                      <th>
                          <span>No.</span>
                        </th>
                        <th>
                          <span>id_barang</span>
                        </th>
                        <th>
                          <span>Nama Barang</span>
                        </th>
                        <th>
                          <span>Jumlah Barang</span>
                        </th>
                        <th>
                          <span>Total Qty</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>99876</td>
                        <td>Galon Kosong</td>
                        <td>500</td>
                        <td>700</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>88901</td>
                        <td>Tisue</td>
                        <td>500</td>
                        <td>700</td>
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
};

export default DashAnalytics;