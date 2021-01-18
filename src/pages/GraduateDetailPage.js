import React, { useState } from "react";
import { GraduateContext } from "../context/graduate-context";
import { Modal, Button, Row, Card } from "antd";

const GraduateDetailPage = ({ graduate }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Modal
        title={graduate.fullname}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <Row>
          <Card title={graduate.headline}>
            <Card
              type="inner"
              title={graduate.current_location}
              extra={<a href="#">More</a>}
            >
              <p>{graduate.headline}</p>
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type="inner"
              title="Inner Card title"
              extra={<a href="#">More</a>}
            >
              Inner Card content
            </Card>
          </Card>
          ,
        </Row>
      </Modal>
    </>
  );
};

//     <Row>
//       <Card title={graduate.fullname}>
//         <Card
//           type="inner"
//           title="Inner Card title"
//           extra={<a href="#">More</a>}
//         >
//           <p>{graduate.headline}</p>
//         </Card>
//         <Card
//           style={{ marginTop: 16 }}
//           type="inner"
//           title="Inner Card title"
//           extra={<a href="#">More</a>}
//         >
//           Inner Card content
//         </Card>
//       </Card>
//       ,
//     </Row>
//   );
// };

export default GraduateDetailPage;
