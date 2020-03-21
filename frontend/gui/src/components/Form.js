import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios'

const FormItem = Form.Item;

class CustomForm extends React.Component{

    handleSubmit = (event, requestType, articleID) => {
        event.preventDefault()
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value
        switch (requestType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error))

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error))
        }
    }

    render(){
        return (
            <div>
              <Form onSubmit={(event) => this.handleSubmit(event, this.props.requestType, this.props.authorID)}>
                <FormItem label="Title">
                  <Input name="title" placeholder="Enter title" />
                </FormItem>
                <FormItem label="Content">
                  <Input name="content" placeholder="Enter details" />
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </FormItem>
              </Form>
            </div>
          );
    }
}
  

export default CustomForm