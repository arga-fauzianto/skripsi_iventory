import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Table, Button, Spinner, Modal, Form } from 'react-bootstrap';
import { API_URL } from 'config';

const MasterBarang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    nama_barang: '',
    qty: 0,
    jumlah: 0
  });
  const [submitting, setSubmitting] = useState(false);

  const getMasterBarang = () => {
    setLoading(true);
    axios.get(`${API_URL.url_development}/masterbarang`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      setLoading(false);
    });
  };

  useEffect(() => {
    getMasterBarang();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormValues({
      nama_barang: '',
      qty: 0,
      jumlah: 0
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('Form Values:', formValues);
  
    try {
      const response = await axios.post(`${API_URL.url_development}/masterbarang`, formValues, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log('Response:', response.data);
      
      // Menangani respons sesuai dengan format yang diberikan
      if (response.data && response.data.message === 'data berhasil disimpan') {
        // Jika data yang diharapkan ada di response.data.data
        if (response.data.data) {
          setData(prevData => [...prevData, response.data.data]);
        }
        resetForm();
        handleCloseModal();
      } else {
        console.error('Unexpected response format:', response.data);
      }
  
    } catch (error) {
      console.error('Error adding master barang:', error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h4">Master Barang</Card.Title>
              <Button variant="primary" size="sm" onClick={handleShowModal}>
                <i className='fa fa-plus'/> Tambah Master Barang
              </Button>
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
                        {submitting && (
                          <tr>
                            <td colSpan="7" className="text-center">
                              <Spinner
                                animation="border"
                                size='sm'
                                variant='primary'
                                role="status"
                                style={{ width: '3rem', height: '3rem' }}
                              >
                                <span className="visually-hidden">Saving...</span>
                              </Spinner>
                              <div className="mt-3">Saving...</div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </PerfectScrollbar>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Master Barang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nama_barang">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                type="text"
                name="nama_barang"
                value={formValues.nama_barang}
                onChange={handleChange}
                placeholder="Nama Barang"
                required
              />
            </Form.Group>

            <Form.Group controlId="qty">
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="number"
                name="qty"
                value={formValues.qty}
                onChange={handleChange}
                placeholder="Qty"
                required
              />
            </Form.Group>

            <Form.Group controlId="jumlah">
              <Form.Label>Jumlah</Form.Label>
              <Form.Control
                type="number"
                name="jumlah"
                value={formValues.jumlah}
                onChange={handleChange}
                placeholder="Jumlah"
                required
              />
            </Form.Group>

            <Modal.Footer>
              {submitting ? (
                <Spinner
                  animation="border"
                  size="sm"
                  variant="primary"
                  role="status"
                >
                  <span className="visually-hidden">Saving...</span>
                </Spinner>
              ) : (
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                  <i className='fa fa-save' /> Save
                </Button>
              )}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default MasterBarang;
