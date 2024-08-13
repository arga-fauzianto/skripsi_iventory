import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Table, Button, Modal, Form, Spinner } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { API_URL } from 'config';

// Validasi yup
const schema = yup.object().shape({
    nama_vendor: yup.string().required('Nama pelanggan wajib diisi'),
    email_address: yup.string().email('Email tidak valid').required('Email wajib diisi'),
    phone_number: yup.string().matches(/^\d+$/, 'Nomor telepon hanya boleh berisi angka').length(13, 'Nomor telepon harus 13 digit').required('Nomor telepon wajib diisi'),
    kota: yup.string().required('Kota wajib diisi'),
    provinsi: yup.string().required('Provinsi wajib diisi')
});

const MasterPelanggan = () => {
    const [showModal, setShowModal] = useState(false);
    const [pelangganData, setPelangganData] = useState(null);
    const [pelanggans, setPelanggans] = useState([]); // Menyimpan data vendor dari API
    const [loading, setLoading] = useState(true); // Menyimpan status loading

    const handleShow = (pelanggan) => {
        setPelangganData(pelanggan);
        setShowModal(true);
    };

    const handleClose = () => {
        setPelangganData(null);
        setShowModal(false);
    };

    const fetchPelanggans = async () => {
        setLoading(true); // Mulai loading
        try {
            const response = await axios.get(`${API_URL.url_development}/masterpelanggan`);
            setPelanggans(response.data);
        } catch (error) {
            console.error('Error fetching vendor data:', error);
        } finally {
            setLoading(false); // Selesai loading
        }
    };

    useEffect(() => {
        fetchPelanggans();
    }, []);

    return (
        <React.Fragment>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Header>
                  <Card.Title as="h3">Master Pelanggan</Card.Title>
                </Card.Header>
                <Card.Body className="p-3">
                  <div className="table-card" style={{ height: '362px' }}>
                    <PerfectScrollbar>
                      {loading ? (
                         <div className="text-center mt-4">
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
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Id Pelanggan</th>
                              <th>Nama Pelanggan</th>
                              <th>Alamat Email</th>
                              <th>No. Telphone</th>
                              <th>Nama Kota</th>
                              <th>Nama Provinsi</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pelanggans.map((pelanggan, index) => (
                              <tr key={pelanggan.id_pelanggan}>
                                <td>{index + 1}</td>
                                <td>{pelanggan.id_pelanggan}</td>
                                <td>{pelanggan.nama_pelanggan}</td>
                                <td>{pelanggan.email_address}</td>
                                <td>{pelanggan.phone_number}</td>
                                <td>{pelanggan.street}</td>
                                <td>{pelanggan.city}</td>
                                <td>
                                  <Button variant="primary" size="sm" className="me-2" onClick={() => handleShow(pelanggan)}>
                                     <i className='fa fa-edit'/> Edit
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      )}
                    </PerfectScrollbar>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Modal */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{pelangganData ? 'Edit Master Pelanggan' : 'Tambah Pelanggan'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={{
                    nama_pelanggan: pelangganData?.nama_pelanggan || '',
                    email_address: pelangganData?.email_address || '',
                    phone_number: pelangganData?.phone_number || '',
                    kota: pelangganData?.street || '',
                    provinsi: pelangganData?.city || ''
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                  // Handle form submission
                  console.log(values);
                  handleClose(); // Close the modal after submission
                }}
              >
                {({ errors }) => (
                  <FormikForm>
                    <Form.Group controlId="nama_pelanggan">
                      <Form.Label>Nama Pelanggan</Form.Label>
                      <Field
                        name="nama_pelanggan"
                        as={Form.Control}
                        type="text"
                        placeholder="Nama Pelanggan"
                        isInvalid={!!errors.nama_pelanggan}
                      />
                      <ErrorMessage name="nama_pelanggan" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="email_address">
                      <Form.Label>Email Address</Form.Label>
                      <Field
                        name="email_address"
                        as={Form.Control}
                        type="email"
                        placeholder="Email Address"
                        isInvalid={!!errors.email_address}
                      />
                      <ErrorMessage name="email_address" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="phone_number">
                      <Form.Label>Phone Number</Form.Label>
                      <Field
                        name="phone_number"
                        as={Form.Control}
                        type="text"
                        placeholder="Phone Number"
                        isInvalid={!!errors.phone_number}
                      />
                      <ErrorMessage name="phone_number" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="kota">
                      <Form.Label>Kota</Form.Label>
                      <Field
                        name="kota"
                        as={Form.Control}
                        type="text"
                        placeholder="Kota"
                        isInvalid={!!errors.kota}
                      />
                      <ErrorMessage name="kota" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="provinsi">
                      <Form.Label>Provinsi</Form.Label>
                      <Field
                        name="provinsi"
                        as={Form.Control}
                        type="text"
                        placeholder="Provinsi"
                        isInvalid={!!errors.provinsi}
                      />
                      <ErrorMessage name="provinsi" component="div" className="invalid-feedback" />
                    </Form.Group>
                    <Button type="submit" variant="primary" className='mt-3'>
                      <i className='fa fa-save'/> Save
                    </Button>
                  </FormikForm>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </React.Fragment>
    );
}

export default MasterPelanggan;
