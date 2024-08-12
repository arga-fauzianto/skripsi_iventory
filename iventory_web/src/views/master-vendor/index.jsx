import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
// import { Save, Edit } from 'react-feather';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as yup from 'yup';

// Validasi yup
const schema = yup.object().shape({
    nama_vendor: yup.string().required('Nama vendor wajib diisi'),
    email_address: yup.string().email('Email tidak valid').required('Email wajib diisi'),
    phone_number: yup.string().matches(/^\d+$/, 'Nomor telepon hanya boleh berisi angka').length(13, 'Nomor telepon harus 13 digit').required('Nomor telepon wajib diisi'),
    kota: yup.string().required('Kota wajib diisi'),
    provinsi: yup.string().required('Provinsi wajib diisi')
});

const MasterVendor = () => {
    const [showModal, setShowModal] = useState(false);
    const [vendorData, setVendorData] = useState(null);

    const handleShow = (vendor) => {
        setVendorData(vendor);
        setShowModal(true);
    };

    const handleClose = () => {
        setVendorData(null);
        setShowModal(false);
    };

    const initialValues = {
        nama_vendor: vendorData?.nama_vendor || '',
        email_address: vendorData?.email_address || '',
        phone_number: vendorData?.phone_number || '',
        kota: vendorData?.kota || '',
        provinsi: vendorData?.provinsi || ''
    };

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
                            <th>No</th>
                            <th>Id Vendor</th>
                            <th>Nama Vendor</th>
                            <th>Nama Kota</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2024098</td>
                            <td>PT. Tirta Biru Gemilang</td>
                            <td>Sukabumi</td>
                            <td>
                              <Button variant="primary" size="sm" className="me-2" onClick={() => handleShow({
                                nama_vendor: 'PT. Tirta Biru Gemilang',
                                email_address: 'contact@tirta.com',
                                phone_number: '0812345678901',
                                kota: 'Sukabumi',
                                provinsi: 'Jawa Barat'
                              })}>
                                 <i className='fa fa-edit'/> Edit
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>2024088</td>
                            <td>PT. Tirta Mineral Jaya</td>
                            <td>Subang</td>
                            <td>
                              <Button variant="primary" size="sm" className="me-2" onClick={() => handleShow({
                                nama_vendor: 'PT. Tirta Mineral Jaya',
                                email_address: 'info@tirta.com',
                                phone_number: '0898765432101',
                                kota: 'Subang',
                                provinsi: 'Jawa Barat'
                              })}>
                                 <i className='fa fa-edit'/> Edit
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

          {/* Modal */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{vendorData ? 'Edit Master Vendor' : 'Tambah Vendor'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                  // Handle form submission
                  console.log(values);
                  handleClose(); // Close the modal after submission
                }}
              >
                {({ errors }) => (
                  <FormikForm>
                    <Form.Group controlId="nama_vendor">
                      <Form.Label>Nama Vendor</Form.Label>
                      <Field
                        name="nama_vendor"
                        as={Form.Control}
                        type="text"
                        placeholder="Nama Vendor"
                        isInvalid={!!errors.nama_vendor}
                      />
                      <ErrorMessage name="nama_vendor" component="div" className="invalid-feedback" />
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

export default MasterVendor;
