import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Table, Button, Modal, Form, Spinner } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { API_URL } from 'config';

// Validasi yup
const schema = yup.object().shape({
    nama_barang: yup.string().required('Nama barang wajib diisi'),
    harga: yup.number().required('Harga wajib diisi').positive('Harga harus positif'),
    jumlah: yup.number().required('Jumlah wajib diisi').positive('Jumlah harus positif'),
    qty: yup.number().required('Qty wajib diisi').positive('Qty harus positif'),
    vendor_id: yup.string().required('Vendor wajib dipilih')
});

const TransaksiMasuk = () => {
    const [showModal, setShowModal] = useState(false);
    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null); // State untuk vendor yang dipilih
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setSelectedVendor(null); // Reset vendor yang dipilih saat modal ditutup
        setCity('');
        setShowModal(false);
    };

    const fetchVendors = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL.url_development}/mastervendor`);
            setVendors(response.data);
        } catch (error) {
            console.error('Error fetching vendor data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleVendorChange = async (event) => {
        const vendorId = event.target.value;
        setSelectedVendor(vendorId);
        const vendor = vendors.find(v => v.id_vendor === vendorId);

        if (vendor) {
            setCity(vendor.city); // Set city based on the selected vendor
        } else {
            setCity('');
        }
    };

    useEffect(() => {
        fetchVendors();
    }, []);

    return (
        <React.Fragment>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <Card.Title as="h3">Transaksi Masuk</Card.Title>
                  <Button variant="primary" size="sm" onClick={handleShow}>
                    <i className='fa fa-plus'/> Tambah Transaksi Masuk
                  </Button>
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
                              <th>Nama Barang</th>
                              <th>Harga</th>
                              <th>Jumlah</th>
                              <th>Qty</th>
                              <th>Vendor</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Tambahkan baris data transaksi jika ada */}
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
              <Modal.Title>Tambah Transaksi Masuk</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={{
                    nama_barang: '',
                    harga: '',
                    jumlah: '',
                    qty: '',
                    vendor_id: ''
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
                    <Form.Group controlId="vendor_id">
                      <Form.Label>Vendor</Form.Label>
                      <Field
                        as="select"
                        name="vendor_id"
                        className={`form-control ${errors.vendor_id ? 'is-invalid' : ''}`}
                        onChange={(e) => {
                          handleVendorChange(e);
                          // Trigger Formik's field change handler
                          e.persist();
                          Formik.handleChange(e);
                        }}
                      >
                        <option value="">Pilih Vendor</option>
                        {vendors.map(vendor => (
                          <option key={vendor.id_vendor} value={vendor.id_vendor}>
                            {vendor.nama_vendor}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="vendor_id" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="nama_barang">
                      <Form.Label>Nama Barang</Form.Label>
                      <Field
                        name="nama_barang"
                        as={Form.Control}
                        type="text"
                        placeholder="Nama Barang"
                        isInvalid={!!errors.nama_barang}
                      />
                      <ErrorMessage name="nama_barang" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="harga">
                      <Form.Label>Harga</Form.Label>
                      <Field
                        name="harga"
                        as={Form.Control}
                        type="number"
                        placeholder="Harga"
                        isInvalid={!!errors.harga}
                      />
                      <ErrorMessage name="harga" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="jumlah">
                      <Form.Label>Jumlah</Form.Label>
                      <Field
                        name="jumlah"
                        as={Form.Control}
                        type="number"
                        placeholder="Jumlah"
                        isInvalid={!!errors.jumlah}
                      />
                      <ErrorMessage name="jumlah" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="qty">
                      <Form.Label>Qty</Form.Label>
                      <Field
                        name="qty"
                        as={Form.Control}
                        type="number"
                        placeholder="Qty"
                        isInvalid={!!errors.qty}
                      />
                      <ErrorMessage name="qty" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="city">
                      <Form.Label>Kota</Form.Label>
                      <Field
                        name="city"
                        as={Form.Control}
                        type="text"
                        placeholder="Kota"
                        value={city}
                        disabled
                      />
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

export default TransaksiMasuk;
