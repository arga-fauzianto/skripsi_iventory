import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Table, Button, Spinner } from 'react-bootstrap';
import { API_URL } from 'config';

const MasterBarang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate progress bar update
    const interval = setInterval(() => {
    }, 100);

    // Fetch data from API
    axios.get(`${API_URL.url_development}/masterbarang`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log('get berhasil', response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });

    // Clear interval when loading is complete
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Master Barang</Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <div className="table-card" style={{ height: '362px' }}>
                {loading ? (
                  <div className="text-center">
                    <Spinner
                      animation="border"
                      size='sm'
                      variant='primary'
                      role="status"
                      style={{ width: '3rem', height: '3rem' }}
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <div className="mt-3">Loading...</div>
                  </div>
                ) : (
                  <PerfectScrollbar>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Id Barang</th>
                          <th>Kode Barang</th>
                          <th>Nama Barang</th>
                          <th>Jumlah Barang</th>
                          <th>Qty</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={item.id_barang}>
                            <td>{index + 1}</td>
                            <td>{item.id_barang}</td>
                            <td>{item.kode_barang}</td>
                            <td>{item.nama_barang}</td>
                            <td>{item.jumlah}</td>
                            <td>{item.qty}</td>
                            <td>
                              <Button variant="primary" size="sm" className="me-2">
                                <i className='fa fa-edit' /> Edit
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </PerfectScrollbar>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MasterBarang;
