import React, { useState, useContext, useEffect } from "react";
import { Form, Row, Col, Input, Checkbox, Card, Divider, Button } from "antd";
// import useGraduatesData from "../utils/useGraduateData";
import axios from "axios";
import GraduateList from "../components/graduate-list";
import { GraduateContext } from "../context/graduate-context";
import { FlashMessage, flashErrorMessage } from "../components/flash-message";

const GraduateSearch = () => {
  const [state, dispatch] = useContext(GraduateContext);
  // const [graduates, setGraduates] = useState([]);

  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const initialState = {
    full_time: false,
    part_time: false,
    willing_relocate: false,
    willing_remote: false,
    internship: false,
    contract: false,
    temp: false,
    editVisibles: {},
  };
  // const [data, setData] = useState([]);
  const [checkBoxState, setCheckboxState] = useState(initialState);
  const {
    full_time,
    part_time,
    willing_relocate,
    willing_remote,
    contract,
    internship,
    temp,
  } = checkBoxState;

  // let filteredData = data;
  // let languageData = data;

  useEffect(() => {
    if (state.graduates.length === 0) {
      return;
    }
    dispatch({
      type: "SEARCH_GRADUATES",
      payload: {
        location,
        language,
        checkBoxState,
      },
    });
  }, [state.graduates, location, language, checkBoxState]);

  //fecth Data normal

  const [form] = Form.useForm();

  //Handler functions
  const handleLocation = (event) => {
    setLocation(event.target.value);
    console.log(location);
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
    console.log(language);
  };

  const handleCheckBox = (event) => {
    setCheckboxState({
      ...checkBoxState,
      [event.target.name]: !checkBoxState[event.target.name],
    });
  };

  //Filter

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title=" Our amazing and talented graduates are looking for new
        opportunities. Check out our graduate directory to see if they may
        be right fit for you"
        bordered={false}
        style={{ width: "100%", textAlign: "center", fontSize: "40px" }}
      >
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
        >
          <Row gutter={120}>
            <Col span={8}>
              <Form.Item name="current_location" label="Current Location">
                <Input
                  placeholder="Current Location"
                  onChange={handleLocation}
                  checked={location}
                  rules={[
                    {
                      required: true,
                      message: "Input something!",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col>
              <Row>
                <Checkbox
                  checked={full_time}
                  onChange={handleCheckBox}
                  name="full_time"
                >
                  Full Time
                </Checkbox>

                <Checkbox
                  checked={part_time}
                  onChange={handleCheckBox}
                  name="part_time"
                >
                  Part Time
                </Checkbox>

                <Checkbox
                  checked={internship}
                  onChange={handleCheckBox}
                  name="internship"
                >
                  Temp
                </Checkbox>
              </Row>
            </Col>
          </Row>

          <Row gutter={120}>
            <Col span={8}>
              <Form.Item
                name="languages"
                label="Language Spoken"
                rules={[
                  {
                    required: true,
                    message: "Input something!",
                  },
                ]}
              >
                <Input
                  placeholder="Language Spoken"
                  onChange={handleLanguage}
                  value={language}
                />
              </Form.Item>
            </Col>
            <Col>
              <Row>
                <Checkbox
                  checked={willing_remote}
                  onChange={handleCheckBox}
                  name="willing_remote"
                >
                  Remote
                </Checkbox>

                <Checkbox
                  checked={willing_relocate}
                  onChange={handleCheckBox}
                  name="willing_relocate"
                >
                  Relocate
                </Checkbox>

                <Checkbox
                  checked={contract}
                  onChange={handleCheckBox}
                  name="contract"
                >
                  Contract
                </Checkbox>
                <Checkbox checked={temp} onChange={handleCheckBox} name="temp">
                  Temp
                </Checkbox>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{
                textAlign: "right",
              }}
            >
              {/* <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button> */}
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default GraduateSearch;
