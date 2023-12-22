// App.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Student from './components/student';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const studentData = [
  { id: 1, name: 'Đạt', image: 'https://giadinh.mediacdn.vn/2020/9/10/photo-1-15997028228301379149185.jpg', email: 'dat09@example.com' },
  { id: 2, name: 'Tiến', image: 'https://blogphotoshop.com/wp-content/uploads/2019/03/anh-the-hoc-sinh-1.jpg', email: 'tien@example.com' },
  { id: 3, name: 'Tùng', image: 'https://i.pinimg.com/564x/5e/6c/57/5e6c572eed026b75f81682e02f83a983.jpg', email: 'tung@example.com' },
  // Add more student data as needed
];

const App = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Student List</h1>
      <Row>
        {studentData.map(student => (
          <Col key={student.id} xs={12} md={6} lg={4}>
            <Student {...student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;