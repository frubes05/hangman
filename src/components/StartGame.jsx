import React, { forwardRef } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Alert} from 'react-bootstrap';

import styles from './StartGame.module.css';


const StartGame = forwardRef(({ handleSubmit, error }, ref) => {
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
       {error && <Alert variant='danger'>
          {error}
        </Alert>}
      <h2 className={styles['form-title']}>User Register</h2>
      <Form.Group className="mb-3">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="text" placeholder="Filip for example..." ref={ref} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
})

export default StartGame