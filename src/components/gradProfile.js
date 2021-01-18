//       <div>
//         <IconLink
//           src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
//           text="Linkedin"
//         />
//         <IconLink
//           src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
//           text=" Github"
//         />
//         <IconLink
//           src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
//           text="Website"
//         />
//       </div>
//       <Divider orientation="left">Resume Text</Divider>
//       <Collapse ghost>
//         <Panel header="Read Resume" key="1">
//           <p>{graduate.resume_text}</p>
//         </Panel>
//       </Collapse>
//     </>
//   );

//   return (
//     <>
//       <PageHeader
//         title={graduate.fullname}
//         className="site-page-header-ghost-wrapper"
//         onBack={() => window.history.back()}
//         subTitle={graduate.current_location}
//         tags={<Tag color="blue">Running</Tag>}
//         extra={[
//           <Link to={`/graduates/edit/${graduate._id}`}><Button key="2">Edit</Button></Link>,
//           <Button key="1" type="primary">
//             Delete
//           </Button>,
//         ]}
//       >
//         <Content>{content}</Content>
//       </PageHeader>
//     </>
//   );
// };

// export default GraduateProfile;

import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { GraduateContext } from "../context/graduate-context";
import { flashErrorMessage } from "../components/flash-message";
import moment from "moment";
import {
  Card,
  Space,
  Tag,
  Collapse,
  Row,
  Divider,
  Typography,
  PageHeader,
  Button,
  Descriptions,
} from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { useContext } = React;

const GraduateProfile = ({ graduate }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(GraduateContext);
  const [redirect, setRedirect] = useState(false);

  const { Meta } = Card;
  const { Panel } = Collapse;

  //Delete Graduate
  const deleteGraduate = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3030/graduates/${id}`,
      );
      dispatch({
        type: "DELETE_GRADUATE",
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  const { Title } = Typography;

  return (
    <>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          level={3}
          onBack={() => window.history.back()}
          title={graduate.fullname}
          subTitle={graduate.current_location}
          extra={[
            <Link to={`/graduates/edit/${graduate._id}`}>
              <Button key="2">Edit</Button>
            </Link>,
            <Button
              key="1"
              type="primary"
              onClick={() => deleteGraduate(graduate._id)}
            >
              Delete
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Profile Created">
              : {graduate.createdAt}
            </Descriptions.Item>

            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <div>
        <Card
          hoverable
          title={<Title level={4}>{graduate.headline}</Title>}
          bordered={false}
          style={{ width: 800, display: "flex", margin: 40 }}
          className="site-page-header-ghost-wrapper"
          extra={
            <Link to={`/graduates/${graduate._id}`}>
              <IconFont type="icon-tuichu" style={{ width: "40px" }} />
            </Link>
          }
        >
          <Meta
            title={graduate.headline}
            description={graduate.current_location}
          />
          <hr />
          <p>{graduate.languages} </p>
          <Space>
            <p>{graduate.email}</p>

            <p>{graduate.githubId}</p>
          </Space>
          <Space>
            <Tag color={"green"}>{graduate.full_time ? "Full Time" : null}</Tag>
            <Tag color={"green"}>{graduate.part_time ? "Part Time" : null}</Tag>
          </Space>
          <Divider orientation="left"></Divider>
          <Row>
            <Space>
              <a href={graduate.githubId}>
                <GithubOutlined
                  style={{ FontSize: "60px", color: "black", width: "10rem" }}
                />
              </a>

              <LinkedinOutlined
                style={{ FontSize: "60px", color: "black", width: "10rem" }}
              />
            </Space>
          </Row>
          <br />
          <Row>
            <Space>
              <FilePdfOutlined
                label="CV"
                style={{ fontSize: "40px", color: "black", width: "10rem" }}
              />

              <GlobalOutlined
                label="Website"
                style={{ fontSize: "40px", color: "black", width: "10rem" }}
              />
            </Space>
          </Row>
          <br />
          <Collapse ghost>
            <Panel header="Read Resume" key="1">
              <p>{graduate.resume_text}</p>
            </Panel>
          </Collapse>
        </Card>
      </div>
    </>
  );
};
export default GraduateProfile;
