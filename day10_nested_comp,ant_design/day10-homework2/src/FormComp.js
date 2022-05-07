import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";
import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Radio,
  Button,
  Checkbox,
  Modal,
} from "antd";
import { DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const { Option } = Select;

const { RangePicker } = DatePicker;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 4,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

// const disabledDate = (current) => {
//   let customDate = new Date();
//   return (
//     current && current < moment(customDate, "YYYY-MM-DD").subtract(1, "days")
//   );
// };

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day").subtract(1, "days");
}

const customValidate = (rule, value) => {
  //console.log(value);
  if (value < 18) {
    return Promise.reject(new Error("อายุน้อยเกินไป"));
  } else if (value >= 60) {
    return Promise.reject(new Error("อายุมากเกินไป"));
  } else {
    return Promise.resolve();
  }
};

const FormComp = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
    console.log(values.firstname);
    console.log(values.lastname);
    console.log(values.email);
    console.log(values.age);
    console.log(values.gender);
    console.log(values.province);
    if (values.other !== undefined) {
      console.log(values.other);
    }
    console.log(`${values.memberperiod[0]._d} to ${values.memberperiod[1]._d}`);
    console.log(values.website);
    console.log(values.introduction);
    for (let i in values.skills_list) {
      console.log(values.skills_list[i]);
    }
    console.log(values.agreement);

    let skills = "";
    for (let i in values.skills_list) {
      skills += `${values.skills_list[i]} `;
    }
    console.log(skills);

    Modal.info({
      content: (
        <pre>
          First Name: {values.firstname}
          <br />
          Last Name: {values.lastname}
          <br />
          Email: {values.email}
          <br />
          Age: {values.age}
          <br />
          Gender: {values.gender}
          <br />
          Province: {values.province}
          <br />
          Abroad: {values.other !== undefined ? values.other : "no information"}
          <br />
          Member Period:
          {` ${values.memberperiod[0]._d} to ${values.memberperiod[1]._d}`}
          <br />
          Website: {values.website}
          <br />
          Introduction: {values.introduction}
          <br />
          Skills: {skills}
        </pre>
      ),
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            required: true,
            max: 50,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            required: true,
            max: 50,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            validator: customValidate,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        initialValue="Bangkok"
        name="province"
        label="Province"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select a province",
          },
        ]}
      >
        <Select placeholder="Please select a province">
          <Option value="bangkok">Bangkok</Option>
          <Option value="chonburi">Chonburi</Option>
          <Option value="phuket">Phuket</Option>
          <Option value="khonkaen">Khonkaen</Option>
          <Option value="nan">Nan</Option>
          <Option value="abroad">Abroad</Option>
        </Select>
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.province !== currentValues.province
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("province") === "abroad" ? (
            <Form.Item
              name="other"
              label="Other"
              // rules={[
              //   {
              //     required: true,
              //   },
              // ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>

      <Form.Item name="memberperiod" label="Member Period">
        <RangePicker disabledDate={disabledDate} />
      </Form.Item>

      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>
      <Form.Item name="introduction" label="Introduction">
        <Input.TextArea />
      </Form.Item>

      <Form.List
        name="skills_list"
        rules={[
          {
            validator: async (_, skills_list) => {
              if (!skills_list || skills_list.length < 2) {
                return Promise.reject(new Error("At least 2 skills"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? "Skills" : ""}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input skill.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    //placeholder="your skill"
                    style={{ width: "50%" }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    style={{ marginLeft: "30px" }}
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add skill
                </Button>
              </Form.Item>

              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept term")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>Accept term</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
        <Button
          type="primary"
          htmlType="submit" //onClick={showModal}
        >
          Submit
        </Button>

        {/* <Button type="primary">Open Modal</Button> */}
        {/* <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
        </Modal> */}
      </Form.Item>
    </Form>
  );
};

export default FormComp;
