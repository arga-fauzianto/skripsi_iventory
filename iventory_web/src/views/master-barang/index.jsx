import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Table, Button, ProgressBar } from 'react-bootstrap';
import { API_URL } from 'config';

const MasterBarang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress bar update
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 10 : 100));
    }, 100);

    // Fetch data from API
    axios.get(`${API_URL.url_development}/barang`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log('get berhasil', data)
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });

    // Clear interval when loading is complete
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      setProgress(100);
    }
  }, [loading]);

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
                  <ProgressBar animated now={progress} label={`${progress}%`} />
                ) : (
                  <PerfectScrollbar>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Id Barang</th>
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
